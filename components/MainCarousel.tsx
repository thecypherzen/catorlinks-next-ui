"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MainCarousel() {
  const data = getCarouselData();

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 w-full gap-5">
        {data.map((entry, idx) => {
          return (
            <CarouselItem key={`carousel-item-${idx}`} className="basis-3/5">
              <Card
                className="rounded-2xl relative overflow-hidden shadow-none border-none bg-cover bg-center bg-no-repeat z-5"
                style={{ backgroundImage: `url(${entry.image})` }}
              >
                <div className="absolute inset-0 z-6 backdrop-blur-xs backdrop-opacity-50"></div>
                <div className="h-full w-full absolute inset-0 z-7 bg-linear-to-b from-transparent to-neutral-950/90 mix-blend-multiply"></div>
                <CardContent className="text-neutral-50 w-auto min-h-[300px] items-start justify-start z-20 grid grid-cols-1 grid-rows-[1fr_3fr_2fr] pt-0 px-6">
                  {/* top left content */}
                  <h4 className="uppercase text-xs tracking-tight">
                    {entry.shortDesc}
                  </h4>
                  {/* main title */}
                  <div className="h-full flex flex-col items-center justify-center">
                    <h3 className="text-5xl text-center font-bold flex flex-col items-center">
                      {entry.name}
                    </h3>
                  </div>
                  {/* lower content */}
                  <div className="flex items-end justify-between gap-6">
                    <div className="w-3/5 space-y-2">
                      <h5 className="font-bold text-xl capitalize">
                        {entry.title}
                      </h5>
                      <p className="text-xs">{entry.longDesc}</p>
                    </div>
                    <div className="w-2/5 flex justify-end">
                      <Button
                        asChild
                        className="rounded-full bg-neutral-50 cursor-pointer hover:bg-linear-to-br from-purple-300 to-blue-500 hover:scale-105 transition-scale duration-400 px-4 py-5 min-w-1/2 text-neutral-950 font-semibold"
                      >
                        <Link href="#">{`Try ${
                          entry.name.split(" ")[0]
                        }`}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex items-center mt-2 gap-2">
        <CarouselDots />
        <div className="flex gap-2 w-1/11 justify-end pr-3">
          <CarouselPrevious className="relative translate-0 top-0 left-0" />
          <CarouselNext className="relative translate-0 top-0 left-0" />
        </div>
      </div>
    </Carousel>
  );
}

const CarouselData = [
  {
    name: "LoremIpsum X.Y",
    title: "Lorem ipsum dolor sit amet.",
    shortDesc: "Lorem ipsum dolor sit",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id voluptatibus tempore eaque repellat laborum nulla quisquam vitae impedit optio!",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "LoremIpsum X.Y",
    title: "Lorem ipsum dolor sit amet.",
    shortDesc: "Lorem ipsum dolor sit",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id voluptatibus tempore eaque repellat laborum nulla quisquam vitae impedit optio!",
    image:
      "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "LoremIpsum X.Y",
    title: "Lorem ipsum dolor sit amet.",
    shortDesc: "Lorem ipsum dolor sit",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id voluptatibus tempore eaque repellat laborum nulla quisquam vitae impedit optio!",
    image:
      "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "LoremIpsum X.Y",
    title: "Lorem ipsum dolor sit amet.",
    shortDesc: "Lorem ipsum dolor sit",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id voluptatibus tempore eaque repellat laborum nulla quisquam vitae impedit optio!",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "LoremIpsum X.Y",
    title: "Lorem ipsum dolor sit amet.",
    shortDesc: "Lorem ipsum dolor sit",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id voluptatibus tempore eaque repellat laborum nulla quisquam vitae impedit optio!",
    image:
      "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
];

function getCarouselData() {
  return CarouselData;
}
