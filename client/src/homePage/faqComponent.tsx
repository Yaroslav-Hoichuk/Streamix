import { useState } from "react";

export interface IFaqComponentProps {
  number: string;
  heading: string;
  description: string;
}

export const FaqComponent = ({
  number,
  heading,
  description,
  underline,
}: IFaqComponentProps & { underline: number }) => {
  const [visible, setVisible] = useState(false);
  function desctiptionHandler() {
    setVisible(!visible);
  }
  return (
    <>
      <div className=" grid py-5 px-2.5 laptop:p-6">
        <div className="gap-5">
          <div className="flex items-center gap-4">
            <span
              className="text-[16px] font-semibold py-2.5 px-3 border-1 border-[#262626] bg-[#1f1f1f] rounded-md
          laptop:text-[20px]"
            >
              {number}
            </span>
            <h3 className="text-[16px] font-medium">{heading}</h3>
            <button className="ml-auto" onClick={() => desctiptionHandler()}>
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <p
            className={`subparagraph mt-3 
          laptop:mt-3.5
          ${visible ? "" : "hidden"}`}
          >
            {description}
          </p>
          <div
            className={`mt-5 h-[2px] bg-linear-to-r from-0% via-17% via-[#e50000] to-100%" ${
              number === "05" ? "laptop:bg-none" : ""
            }${number === "06" ? "bg-none" : ""}
            `}
          ></div>
        </div>
      </div>
    </>
  );
};
