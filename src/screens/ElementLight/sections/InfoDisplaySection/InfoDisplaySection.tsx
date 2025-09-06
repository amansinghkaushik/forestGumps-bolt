import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const InfoDisplaySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[960px] mx-auto px-4 relative">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-3">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[31px] tracking-[-0.96px] leading-8 mb-4">
              Empower Your <br />
              Climate Action <br />
              with Carbon <br />
              Credits.
            </h2>

            <div className="w-[220px] h-[3px] bg-[#383838] mb-4" />

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[15.9px] tracking-[-0.16px] leading-[19.2px]">
              Join us in transforming the <br />
              voluntary carbon market through <br />
              transparency and integrity. Our <br />
              blockchain-enabled platform <br />
              makes it easy for you to buy, <br />
              trade, and retire carbon credits <br />
              from verified afforestation <br />
              projects..
            </p>
          </div>

          <div className="col-span-6 flex justify-center">
            <img
              className="w-[460px] h-[1080px] object-cover"
              alt="Placeholder"
              src="/placeholder-1.svg"
            />
          </div>

          <div className="col-span-3 flex flex-col items-end">
            <div className="mt-[823px] mb-8">
              <div className="text-right [font-family:'Inter',Helvetica] font-medium text-[#999999] text-[15.5px] tracking-[-0.16px] leading-[19.2px] mb-2">
                Our platform makes it simple to <br />
                buy, trade, and retire carbon <br />
                credits sourced from verified <br />
                afforestation projects. This <br />
                ensures that your contributions <br />
                directly support real, measurable <br />
                climate action while building a <br />
                sustainable future for
              </div>

              <div className="text-right [font-family:'Inter',Helvetica] font-medium text-[#999999] text-[14.6px] tracking-[-0.16px] leading-[19.2px]">
                generations to come.
              </div>
            </div>

            <Button className="bg-[#010204] hover:bg-[#010204]/90 rounded-[50px] h-[57px] px-5 flex items-center gap-3">
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] leading-[19.2px]">
                Button
              </span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRightIcon className="w-5 h-5 text-black" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
