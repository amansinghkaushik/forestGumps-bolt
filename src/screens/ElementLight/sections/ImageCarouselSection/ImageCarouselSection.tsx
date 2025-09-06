import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const ImageCarouselSection = (): JSX.Element => {
  const carouselImages = [
    {
      src: "/t61jvztnhhgqsotrr6s9f7e1w-jpg.png",
      alt: "Building future image 1",
      width: "w-[400px]",
      height: "h-[265px]",
    },
    {
      src: "/pufb66p2kt8lkmxai2jiuqchshi-jpg.png",
      alt: "Building future image 2",
      width: "w-[400px]",
      height: "h-[269px]",
    },
    {
      src: "/scouiq4wiatvnocb0ds8v4bxy-jpg.png",
      alt: "Building future image 3",
      width: "w-[400px]",
      height: "h-[300px]",
    },
    {
      src: "/wtcdd1qmxc1a9jejrqemitltnmo-jpg.png",
      alt: "Building future image 4",
      width: "w-[200px]",
      height: "h-[300px]",
    },
    {
      src: "/cgjfonof4ozjbbqadiqnsxrha8-jpg.png",
      alt: "Building future image 5",
      width: "w-[400px]",
      height: "h-[265px]",
    },
  ];

  return (
    <section className="w-full h-[600px] bg-white overflow-hidden relative">
      <header className="pt-[47px] pl-5">
        <h1 className="w-[896px] h-24 [font-family:'Inter',Helvetica] font-normal text-[#575757] text-[73.9px] tracking-[0] leading-[96px] whitespace-nowrap">
          Building a Cleaner Future.
        </h1>
      </header>

      <div className="mt-[72px] relative">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-[30px] pl-5">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="basis-auto">
                <div
                  className={`${image.width} ${image.height} bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="absolute bottom-[77px] left-1/2 transform -translate-x-1/2">
        <p className="w-[108px] h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#575757] text-[21.6px] tracking-[0] leading-[28.8px] whitespace-nowrap text-center">
          …SWIPE ...
        </p>
      </div>
    </section>
  );
};
