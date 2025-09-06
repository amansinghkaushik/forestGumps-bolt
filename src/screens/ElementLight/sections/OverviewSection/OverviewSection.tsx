import React from "react";

export const OverviewSection = (): JSX.Element => {
  const statisticsData = [
    {
      number: "30+",
      label: "Awards.",
      numberClasses: "w-[115px] h-16 top-[99px] left-[136px]",
      labelClasses: "w-[78px] h-[22px] top-[173px] left-[155px]",
    },
    {
      number: "32+",
      label: "Investments.",
      numberClasses: "w-28 h-16 top-[99px] left-[526px]",
      labelClasses: "w-[123px] h-[22px] top-[173px] left-[520px]",
    },
    {
      number: "10K",
      label: "Users.",
      numberClasses: "w-[103px] h-16 top-[99px] left-[918px]",
      labelClasses: "w-[60px] h-[22px] top-[173px] left-[939px]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="relative w-full max-w-[1203px] mx-auto px-5">
        <div className="relative w-full h-[410px] mb-20">
          <div className="absolute w-[277px] h-[67px] top-[3px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#0f0f0f] text-2xl tracking-[-0.48px] leading-[38.4px]">
            Your Path to Sustainable <br />
            Change
          </div>

          <div className="absolute w-[257px] h-[97px] top-[155px] left-[397px] [font-family:'Inter',Helvetica] font-bold text-[#0f0f0f] text-base text-right tracking-[-0.32px] leading-[25.6px]">
            Transparent Carbon Action
            <br />
            Carbon Credits, Simplified
            <br />
            Real Projects. Real Impact.
            <br />
            Traceable Impact, Trusted Results
          </div>

          <div className="absolute w-[415px] h-[353px] top-3.5 left-[766px] [font-family:'Inter',Helvetica] font-bold text-[#0f0f0f] text-[80px] text-right tracking-[-1.60px] leading-[128px]">
            Measure. <br />
            Trade. <br />
            Transform.
          </div>

          <div className="absolute w-[9px] h-5 top-[385px] left-[766px] [font-family:'Inter',Helvetica] font-normal text-[#666666] text-base text-right tracking-[-0.32px] leading-[25.6px] whitespace-nowrap">
            •
          </div>
        </div>

        <div className="relative w-full h-[196px]">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={index}>
              <div
                className={`${stat.numberClasses} font-bold text-black text-[59.4px] tracking-[-2.56px] leading-[64px] absolute [font-family:'Inter',Helvetica] text-center whitespace-nowrap`}
              >
                {stat.number}
              </div>
              <div
                className={`${stat.labelClasses} font-normal text-[#999999] text-[20.5px] tracking-[-0.44px] leading-[22px] absolute [font-family:'Inter',Helvetica] text-center whitespace-nowrap`}
              >
                {stat.label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
