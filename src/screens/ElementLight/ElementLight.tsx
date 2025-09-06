import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { ContentBlockSection } from "./sections/ContentBlockSection/ContentBlockSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection/FeatureHighlightSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ImageCarouselSection } from "./sections/ImageCarouselSection/ImageCarouselSection";
import { InfoDisplaySection } from "./sections/InfoDisplaySection/InfoDisplaySection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { OverviewSection } from "./sections/OverviewSection/OverviewSection";
import { PageWrapperSection } from "./sections/PageWrapperSection/PageWrapperSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";

const featureItems = [
  {
    text: "Transparancy",
    className:
      "w-[99px] h-[21px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#333333] text-[15.4px] tracking-[0] leading-[19.2px] whitespace-nowrap",
  },
  {
    text: "Green Energy",
    className:
      "w-[97px] h-[21px] left-[553px] [font-family:'Inter',Helvetica] font-normal text-[#333333] text-[15px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap",
  },
  {
    text: "Eco friendly",
    className:
      "w-[82px] h-[21px] left-[1081px] [font-family:'Inter',Helvetica] font-normal text-[#333333] text-[14.6px] text-right tracking-[0] leading-[19.2px] whitespace-nowrap",
  },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white">
      <div className="relative w-full">
        <div className="relative w-full bg-white">
          <div className="relative w-full max-w-[1203px] mx-auto">
            <HeroSection />
            <OverviewSection />
            <MainContentSection />
            <PageWrapperSection />
            <InfoDisplaySection />
            <FeatureHighlightSection />
            <ContentBlockSection />
            <ImageCarouselSection />
            <ContactFormSection />
            <SiteFooterSection />
          </div>
        </div>

        <img
          className="absolute w-full h-[1200px] top-0 left-0"
          alt="Iframe mask group"
          src="/iframe-mask-group.svg"
        />
      </div>

      <img
        className="fixed w-[124px] h-[30px] top-[585px] right-[10px]"
        alt="Container"
        src="/container.svg"
      />
    </div>
  );
};
