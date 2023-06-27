<script setup lang="ts">
import { ref } from "vue"
const counter = ref(0);
import { Authenticator } from "@aws-amplify/ui-vue"
import '@aws-amplify/ui-vue/styles.css'

</script>
<template>
    <div>
        <Authenticator />
        <h1>Hello World Root</h1>
        <Highlight>
            <h1>This is client side inside highlight</h1>
        </Highlight>
        <button @click="counter++">Click Me</button>
        <NuxtLink to="/page">To Page Route</NuxtLink>
    </div>
</template>



<style scoped></style>