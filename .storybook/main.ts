import type { StorybookConfig } from "@storybook/react-vite";
import { ICON_SVG } from "./favicon";
import glob from "glob";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/scenes/**/*.stories.@(jsx|tsx)"],
  staticDirs: glob.sync(path.resolve(__dirname, "../submodules/**/public")),

  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml, ${encodeURIComponent(ICON_SVG)}" />
  `,

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
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
