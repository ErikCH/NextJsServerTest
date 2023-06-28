<script setup lang="ts">
import { ref } from "vue";
const recipe = ref("");

const d = await new Promise(async (resolve) =>
  setTimeout(() => resolve("hi"), 7000)
);
console.log(d);
</script>
<template>
  <div style="border: 1px solid black; padding: 1rem">
    <h1>Server Component123</h1>
    <!-- {{ recipe }} -->
    <div v-if="recipe">
      <div v-html="recipe"></div>
    </div>
    <slot name="erik"></slot>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
