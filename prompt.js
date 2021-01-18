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
                { message: "Antd", name: "antd" },
            ],
            default: "none",
        },
        {
            name: "css_features",
            message: "CSS Preprocessor:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "Css (next.js built-in)", name: "css" },
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
                { message: "Storybook", name: "storybook" },
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
                { message: "Recoil", name: "recoil" },
                { message: "MobX", name: "mobx" },
            ],
            default: "none",
        },
        {
            name: "linter",
            message: "Linting tools:",
            type: "multiselect",
            pageSize: 10,
            choices: [
                { message: "ESLint", name: "eslint" },
                { message: "Prettier", name: "prettier" },
                { message: "Lint staged files", name: "lint-staged" },
            ],
            default: [],
        },
        {
            name: "testing",
            message: "Testing Framework:",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Jest", name: "jest" },
                {
                    message: "React Testing Library + Jest",
                    name: "testing-library",
                },
                { message: "Enzyme + Jest", name: "enzyme" },
            ],
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
};
