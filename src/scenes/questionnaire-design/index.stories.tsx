import { FC } from "react";
import type { Meta } from "@storybook/react";

interface QuestionnaireDesignProps {}

const QuestionnaireDesign: FC<QuestionnaireDesignProps> = (props) => {
  return (
    <div style={{ color: "white" }} {...props}>
      abc
    </div>
  );
};

export default {
  title: "Questionnaire Design",
  component: QuestionnaireDesign,
} satisfies Meta<typeof QuestionnaireDesign>;

export const LiveDemo = () => <QuestionnaireDesign />;
