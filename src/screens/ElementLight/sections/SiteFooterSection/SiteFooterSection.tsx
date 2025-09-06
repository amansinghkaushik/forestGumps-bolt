import React from "react";

export const SiteFooterSection = (): JSX.Element => {
  const footerColumns = [
    {
      title: "Subtitle",
      links: ["Link", "Link", "Link"],
    },
    {
      title: "Subtitle",
      links: ["Link", "Link", "Link"],
    },
    {
      title: "Subtitle",
      links: ["Link", "Link", "Link"],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#eeeeee] py-[100px]">
      <div className="max-w-[960px] mx-auto px-4">
        <div className="flex justify-between items-start">
          <img
            className="w-[51px] h-[17px]"
            alt="Mask group"
            src="/mask-group.svg"
          />

          <div className="flex gap-[91px]">
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col">
                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[14.3px] text-center tracking-[-0.15px] leading-[15px] whitespace-nowrap mb-6">
                  {column.title}
                </div>
                {column.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[14.5px] text-center tracking-[-0.15px] leading-[15px] whitespace-nowrap mb-6 last:mb-0"
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
