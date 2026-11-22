import type { IFaqComponentProps } from "./faqComponent";
import { TopicHeader } from "./topicHeader";

type IMembePlanProps = {
  summary: string;
  description: string;
  heading: string;
};

export const MemberPlan = ({ summary, description, heading }: IMembePlanProps) => {
  return (
    <>
      <div className="bg-[#1A1A1A] p-6 border-1 border-[#262626] rounded-[10px] mt-5">
        <TopicHeader description={description} heading={heading} />
        <div className="py-7.5">
          <span className="text-2xl">${summary}</span>
          <span className="subparagraph">/month</span>
        </div>
        <div className="flex gap-3">
          <button className="button bg-[#141414]">Start Free Trial</button>
          <button className="button bg-red-600">Choose Plan</button>
        </div>
      </div>
    </>
  );
};
