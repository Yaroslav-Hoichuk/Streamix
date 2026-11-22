import type { IFaqComponentProps } from "./faqComponent";
type TopicHeaderProps = Omit<IFaqComponentProps, "number"> & Partial<{ textSize: number }>;

export const TopicHeader = ({ heading, description, textSize = 19 }: TopicHeaderProps) => {
  return (
    <>
      <h3 className={`text-white text-[${textSize}px] font-bold mb-2.5`}>{heading}</h3>
      <p className="subparagraph">{description}</p>
    </>
  );
};
