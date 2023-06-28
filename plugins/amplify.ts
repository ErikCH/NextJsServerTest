import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import "@aws-amplify/ui-vue/styles.css";

import aws_exports from "../src/aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(aws_exports);
  if (!Amplify.Predictions._identifyPluggables.length)
    Amplify.addPluggable(new AmazonAIPredictionsProvider());

  return {
    provide: {
      auth: Auth
    }
  };
});
