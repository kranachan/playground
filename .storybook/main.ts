import type { StorybookConfig } from "@storybook/react-vite";
import glob from "glob";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/scenes/**/*.stories.@(jsx|tsx)"],
  staticDirs: glob.sync(path.resolve(__dirname, "../submodules/**/public")),
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "submodules",
            replacement: path.resolve(__dirname, "../submodules"),
          },
        ],
      },
    });
  },
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
