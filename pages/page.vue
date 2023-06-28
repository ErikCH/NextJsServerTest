<script setup lang="ts">
import { ref } from "vue";
import { Predictions } from "aws-amplify";
import { formatTextToHTML } from "@/utils/format";

const text = ref("");
const ingredients = ref("");
const loading = ref(false);

async function onSubmit() {
  loading.value = true;
  const recommendation = await $fetch("/api/recipe", {
    method: "POST",
    body: { text: ingredients.value }
  });
  ingredients.value = "";
  play(recommendation.trim().replace(/-/g, "\n\n"));

  text.value = formatTextToHTML(recommendation);
  loading.value = false;
}

async function play(text: string) {
  const res = await Predictions.convert({
    textToSpeech: {
      source: {
        text: text
      },
      voiceId: "Amy" // default configured on aws-exports.js
      // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
    }
  });
  var audio = new Audio();
  audio.src = res.speech.url;
  audio.play();
}
</script>
<template>
  <div class="main">
    <h1>Recipe Creator</h1>
    <form @submit.prevent="onSubmit" class="main">
      <input
        v-model="ingredients"
        placeholder="List Ingredients"
        class="input"
        :disabled="loading"
      />
      <button type="submit" :disabled="loading">Create Recipe</button>
    </form>
    <div v-html="text"></div>
  </div>
  <NuxtLink to="/">To Home</NuxtLink>
</template>

<style></style>
