import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ContentBlockSection = (): JSX.Element => {
  const steps = [
    {
      title: "Step 1: Submit Your Afforestation Project for Verification",
      description:
        "Easily upload your project details and evidence for review.",
      action: "Submit",
    },
    {
      title: "Step 2: Get Your Project Verified and Approved",
      description: "Our experts review and validate your project credentials.",
      action: "Verify",
    },
    {
      title: "Step 3: Earn and Trade Carbon Credits",
      description:
        "Start earning credits and participate in the carbon market.",
      action: "Trade",
    },
  ];

  return (
    <section className="w-full bg-white py-[100px] px-5">
      <div className="max-w-[1163px] mx-auto">
        <div className="flex items-start gap-[89px] mb-[100px]">
          <div className="flex-1 max-w-[300px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#575757] text-[15.2px] tracking-[0] leading-[19.2px] mt-[174px]">
              Our platform simplifies the process of <br />
              participating in the carbon market. From <br />
              submitting your afforestation project to <br />
              retiring carbon credits, we guide you every <br />
              step of the way. Experience transparency <br />
              and integrity as you contribute to a <br />
              greener planet.
            </p>
          </div>

          <Separator
            orientation="vertical"
            className="h-[310px] w-px bg-gray-300"
          />

          <div className="flex-1 max-w-[600px]">
            <div className="pl-16">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[59.5px] text-right tracking-[-1.86px] leading-[62px] mb-[-14px]">
                Discover How Our <br />
                Carbon Credit <br />
                Platform Empowers <br />
                Your Climate
              </h2>
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[58.2px] text-right tracking-[-1.86px] leading-[62px] ml-[126px]">
                Action Journey
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 bg-[#f0f0f0] mb-[27px]" />

                <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#575757] text-[22.3px] tracking-[0] leading-[28.8px] mb-[8px]">
                  {step.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {(i === 4 || i === 8) && <br />}
                      {i !== step.title.split(" ").length - 1 &&
                        i !== 4 &&
                        i !== 8 &&
                        " "}
                    </React.Fragment>
                  ))}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[19.2px] mb-[10px]">
                  {step.description.split(" ").slice(0, 7).join(" ")} <br />
                  {step.description.split(" ").slice(7).join(" ")}
                </p>

                <span className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                  {step.action}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
