module.exports = {
  prompts: [
    {
      name: "ui",
      message: "UI framework:",
      type: "select",
      pageSize: 3,
      choices: [
        { message: "None", name: "none" },
        { message: "Tailwind CSS", name: "tailwind" },
        { message: "Bootstrap", name: "bootstrap" },
        { message: "Chakra UI", name: "chakra-ui" },
        { message: "Antd", name: "antd"},
      ],
      default: "none",
    },
    {
      name: "css_features",
      message: "CSS Preprocessor:",
      type: "select",
      pageSize: 2,
      choices: [
        { message: "Css (nextjs build-in)", name: "css" },
        { message: "Sass/Scss", name: "sass" },
        { message: "Less", name: "less" },
      ],
      default: "css",
    },
    {
      name: "features",
      message: "Features:",
      type: "multiselect",
      pageSize: 2,
      choices: [
        { message: "Axios", name: "axios" },
        { message: "Prettier", name: "prettier" },
        { message: "Jest", name: "jest" },
      ],
      default: "none",
    },
    {
      name: "state-management",
      message: "State Management:",
      type: "select",
      pageSize: 3,
      choices: [
        { message: "None", name: "none" },
        { message: "Redux", name: "redux" },
      ],
      default: "none",
    },
    {
      name: "e2etest",
      message: "E2E Testing framework:",
      type: "select",
      choices: [
        { message: "None", name: "none" },
        { message: "Cypress", name: "cypress" },
        { message: "WebdriverIO", name: "webdriverio" },
      ],
      default: "none",
    },
    {
      name: "docker",
      message: "Docker integration:",
      type: "select",
      pageSize: 3,
      choices: [
        { message: "None", name: "none" },
        { message: "Dockerfile", name: "Docker" },
      ],
      default: "none",
    },
    {
      name: "CI",
      message: "Continuous integration:",
      type: "select",
      choices: [
        { message: "None", name: "none" },
        { message: "GitHub Actions", name: "github-actions" },
        { message: "Travis", name: "travis" },
      ],
      default: "none",
    },
  ],
  default: "none",
};
