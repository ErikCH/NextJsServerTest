import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
// import aws_exports from "../src/aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure({});

  return {
    provide: {
      auth: Auth
    }
  };
});