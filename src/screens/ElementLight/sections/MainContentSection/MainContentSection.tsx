import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  const textLines = [
    "We prioritize transparency in every",
    "transaction, ensuring that all carbon",
    "credits are backed by verified projects.",
    "Our platform allows users to trace the",
    "journey of each credit, fostering trust and",
    "accountability.",
  ];

  return (
    <section className="w-full bg-white py-[100px] px-5">
      <div className="max-w-[1163px] mx-auto flex items-start gap-[145px]">
        <div className="flex-shrink-0">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[60.2px] tracking-[-1.86px] leading-[62px]">
            Our Commitment <br />
            to a Sustainable <br />
            Future
          </h2>
        </div>

        <Separator orientation="vertical" className="h-64 w-px bg-gray-300" />

        <div className="flex-1 pt-[89px]">
          <div className="text-right space-y-[1px]">
            {textLines.map((line, index) => (
              <p
                key={index}
                className="[font-family:'Inter',Helvetica] font-normal text-[#575757] text-[15px] tracking-[0] leading-[19.2px] whitespace-nowrap"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
