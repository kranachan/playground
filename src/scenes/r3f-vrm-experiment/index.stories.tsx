import type { Meta } from "@storybook/react";
import { Moonlight } from "submodules/r3f-vrm-experiment/src/3d/scenes/Moonlight";

export default {
  title: "R3F VRM Experiment",
  component: Moonlight,
} satisfies Meta<typeof Moonlight>;

export const LiveDemo = () => <Moonlight />;
