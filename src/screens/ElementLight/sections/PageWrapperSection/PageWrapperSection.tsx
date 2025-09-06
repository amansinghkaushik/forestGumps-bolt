import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const PageWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[960px] mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full">
            <img
              className="w-full h-[1080px] object-cover"
              alt="Placeholder"
              src="/placeholder.svg"
            />
          </div>

          <div className="flex flex-col space-y-6 pt-1">
            <div className="space-y-4">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[29.8px] tracking-[-0.96px] leading-8">
                Unlock the <br />
                Future of <br />
                Carbon Trading.
              </h2>

              <div className="w-[220px] h-[3px] bg-[#383838]" />
            </div>

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[15.1px] tracking-[-0.16px] leading-[19.2px] max-w-[233px]">
              Our platform is revolutionizing <br />
              carbon credit trading by bringing <br />
              transparency, integrity, and trust <br />
              through blockchain technology. <br />
              Every credit is securely verified <br />
              and recorded, eliminating risks of <br />
              fraud or duplication while <br />
              ensuring accountability at each <br />
              step.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 lg:right-8 space-y-6">
          <div className="text-right max-w-[225px]">
            <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[15.6px] text-right tracking-[-0.16px] leading-[19.2px]">
              Users can easily track their <br />
              contributions and see the real <br />
              impact of the projects they <br />
              support, from renewable energy <br />
              to reforestation. This makes <br />
              carbon offsetting not only <br />
              reliable but also engaging, <br />
              inspiring individuals and <br />
              businesses to take meaningful <br />
              action toward a sustainable
            </p>

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[14.5px] text-right tracking-[-0.16px] leading-[19.2px] mt-1">
              future.
            </p>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#010204] hover:bg-[#010204]/90 rounded-[50px] h-[57px] px-5 pr-2 flex items-center gap-3">
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[19.2px]">
                Button
              </span>
              <div className="w-10 h-10 bg-white rounded-[50px] flex items-center justify-center">
                <ArrowRightIcon className="w-5 h-5 text-black" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
