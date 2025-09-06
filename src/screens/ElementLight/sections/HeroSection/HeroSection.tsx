import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[#99eeff] overflow-hidden">
          <div className="h-full bg-[url(/herofront---l0lpvqnzuxsep9qw7qf5l9doo-png.png)] bg-cover bg-center" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <header className="flex items-center justify-between px-10 py-7 overflow-hidden">
            <img
              className="w-[26px] h-6"
              alt="Top img framer logo"
              src="/top---img---framer-logo.svg"
            />

            <div className="flex items-center gap-8">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[22.7px] tracking-[0] leading-[28.8px]">
                LOGIN
              </div>

              <Button className="h-[57px] bg-[#010204] rounded-[50px] px-5 flex items-center gap-3">
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[19.2px]">
                  Button
                </span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png-2.png)] bg-cover bg-center">
                    <div className="bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png-3.png)] h-5 bg-cover bg-center" />
                  </div>
                </div>
              </Button>
            </div>
          </header>

          <main className="flex-1 flex flex-col justify-between px-10 py-10">
            <div className="max-w-[718px]">
              <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-[76.2px] tracking-[-3.20px] leading-[80px]">
                Empowering Climate
                <br />
                Action Through
                <br />
                Blockchain
                <br />
                Innovation
              </h1>
            </div>

            <div className="flex justify-end max-w-[668px] ml-auto">
              <div className="max-w-[499px]">
                <div className="mb-6">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#252a18] text-[18.9px] text-right tracking-[-0.80px] leading-5">
                    Our blockchain-enabled carbon credit platform ensures <br />
                    transparency and integrity in the voluntary carbon market.{" "}
                    <br />
                    Join us in making a measurable impact through verified
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#252a18] text-[18.8px] text-right tracking-[-0.80px] leading-5 mt-1">
                    afforestation projects.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button className="h-[57px] bg-[#010204] rounded-[50px] px-5 flex items-center gap-3">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[19.2px]">
                      Button
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png.png)] bg-cover bg-center">
                        <div className="h-5 bg-[url(/image---dv8bd3d0t9hguxudsw5h1sbita0-png-1.png)] bg-cover bg-center" />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
