import { useState } from "react";

export interface IFaqComponentProps {
  number: string;
  heading: string;
  description: string;
}

export const FaqComponent = ({ number, heading, description }: IFaqComponentProps) => {
  const [visible, setVisible] = useState(false);
  function desctiptionHandler() {
    setVisible(!visible);
  }
  return (
    <>
      <div className="py-5 px-2.5">
        <div className="flex items-center gap-4">
          <span className="text-[16px] font-semibold py-2.5 px-3 border-1 border-[#262626] bg-[#1f1f1f] rounded-md">
            {number}
          </span>
          <h3 className="text-[16px] font-medium">{heading}</h3>
          <button className="ml-auto" onClick={() => desctiptionHandler()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <p className={`subparagraph mt-3 ${visible ? "" : "hidden"}`}>{description}</p>
      </div>
    </>
  );
};
