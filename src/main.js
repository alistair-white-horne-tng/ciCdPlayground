import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Alistair White-Horne",
    // In the following fields you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: [
        "Awesome things",
        "Testing",
        "Building",
        "Deploying"
    ],
    // Which CI/CD tools do you use in your project?
    tools: "None at all - never used any before...",
    // What do you want to learn in this workshop?
    expectations: "Everythinggg!",
  },
});
