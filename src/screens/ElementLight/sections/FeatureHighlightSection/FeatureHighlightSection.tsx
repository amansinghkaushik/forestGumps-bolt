import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[960px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col space-y-6">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[-0.96px] leading-8">
              Experience <br />
              Effortless <br />
              Trading and <br />
              Retirement of <br />
              Carbon Credits <br />
              with <br />
              Confidence.
            </h1>

            <Separator className="w-[230px] h-[3px] bg-[#383838]" />

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[15px] tracking-[-0.16px] leading-[19.2px] max-w-[224px]">
              Our platform makes trading and <br />
              retiring carbon credits simple <br />
              and seamless for everyone. By <br />
              supporting verified projects and <br />
              maintaining transparent <br />
              processes, we ensure that your <br />
              participation in climate action is <br />
              both trustworthy and impactful.
            </p>

            <div className="pt-[440px] lg:pt-[440px]">
              <div className="max-w-[230px] ml-auto lg:ml-0 lg:mr-0">
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[14.8px] text-right tracking-[-0.16px] leading-[19.2px] mb-1">
                  With every credit accounted for <br />
                  and traceable, you can <br />
                  confidently contribute to <br />
                  meaningful environmental <br />
                  change, knowing your efforts are <br />
                  making a real difference in
                </p>
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[14.6px] text-right tracking-[-0.16px] leading-[19.2px] ml-7">
                  building a sustainable future.
                </p>
              </div>

              <div className="flex justify-end lg:justify-start mt-10 lg:ml-[90px]">
                <Button className="bg-[#010204] hover:bg-[#010204]/90 rounded-[50px] h-[57px] px-5 flex items-center gap-3">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[19.2px]">
                    Button
                  </span>
                  <div className="w-10 h-10 bg-white rounded-[50px] flex items-center justify-center">
                    <div className="w-5 h-5 bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png-8.png)] bg-cover bg-[50%_50%]">
                      <div className="bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png-9.png)] h-5 bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[460px] h-auto lg:h-[1080px] object-cover"
              alt="Placeholder"
              src="/placeholder-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
