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
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

/**
 * Home page carousel component. Uses mock static
 * data.
 * @function MainCarousel
 * @returns {HTMLDivElement} The carousel
 */
export default function MainCarousel() {
  const data = getCarouselData();

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 w-full gap-5">
        {data.map((entry, idx) => {
          return (
            <CarouselItem
              key={`carousel-item-${idx}`}
              className="basis-full sm:basis-4/5 lg:basis-3/5"
            >
              <Card
                className="rounded-2xl relative overflow-hidden shadow-none border-none bg-cover bg-center bg-no-repeat z-5"
                style={{ backgroundImage: `url(${entry.image})` }}
              >
                <div className="absolute inset-0 z-6 backdrop-blur-xs backdrop-opacity-50"></div>
                <div className="h-full w-full absolute inset-0 z-7 bg-linear-to-b from-transparent to-neutral-950/90 mix-blend-multiply"></div>
                <CardContent className="text-neutral-50 w-auto min-h-[300px] items-start justify-start z-20 grid grid-cols-1  grid-rows-[0.5fr_1.5fr_2fr] sm:grid-rows-[1fr_2fr_2fr] lg:grid-rows-[1fr_3fr_2fr]pt-0 px-6">
                  {/* top left content */}
                  <h4 className="uppercase text-xs tracking-tight">
                    {entry.shortDesc}
                  </h4>
                  {/* main title */}
                  <div className="h-full flex flex-col items-center justify-center">
                    <h3 className="text-4xl lg:text-5xl text-center font-extrabold md:font-bold flex flex-col items-center">
                      {entry.name}
                    </h3>
                  </div>
                  {/* lower content */}
                  <div className="flex w-full h-full flex-col items-center justify-end md:flex-row md:items-end md:justify-between gap-6">
                    <div className="w-full md:w-3/5 space-y-2">
                      <h5 className="text-center md:text-left font-bold text-xl capitalize">
                        {entry.title}
                      </h5>
                      <p className="text-xs text-center md:text-left">
                        {entry.longDesc}
                      </p>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center md:justify-end">
                      <Button
                        asChild
                        className="rounded-full bg-neutral-50 cursor-pointer active:bg-linear-to-br hover:bg-linear-to-br from-purple-300 to-blue-500 hover:scale-105 transition-scale duration-400 px-4 py-5 min-w-1/2 text-neutral-950 font-semibold"
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
        <CarouselDots className="gap-3" />
        <div className="flex gap-2 w-1/11 justify-end pr-3">
          <CarouselPrevious className="relative translate-0 top-0 left-0" />
          <CarouselNext className="relative translate-0 top-0 left-0" />
        </div>
      </div>
    </Carousel>
  );
}

/**
 * The Carousel dummy data
 * @constant {Array<typeof CarsouselData>} CarouselData
 */
const CarouselData = [
  {
    name: "WAN 2.2",
    title: "WAN 2.2 Image Generation",
    shortDesc: "New Image Model",
    longDesc:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "Open Source",
    title: "FLUX.1 Krea",
    shortDesc: "Open Source Model",
    longDesc:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report or generate with it in krea Image.",
    image:
      "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "EchoText",
    title: "EchoText AI Writer",
    shortDesc: "AI Writing Assistant",
    longDesc:
      "Craft high-quality blog posts, product descriptions, and reports with EchoText. Designed for speed, clarity, and tone adaptation.",
    image:
      "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "Visionary 5",
    title: "Visionary 5 Video Gen",
    shortDesc: "Next-Gen Video Model",
    longDesc:
      "Create cinematic video clips from text prompts. Visionary 5 delivers smooth motion, lifelike detail, and unmatched creative control.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "Atlas",
    title: "Atlas Knowledge Engine",
    shortDesc: "Enterprise AI Search",
    longDesc:
      "Atlas connects scattered company knowledge into a searchable, conversational assistant. Ideal for enterprises and teams of all sizes.",
    image:
      "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "Pulse 3",
    title: "Pulse 3 Real-Time Analytics",
    shortDesc: "Data in Motion",
    longDesc:
      "Streamline data monitoring with Pulse 3. Real-time dashboards and predictive alerts that adapt to fast-changing environments.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "SynthVoice",
    title: "SynthVoice Studio",
    shortDesc: "Voice Generation",
    longDesc:
      "Generate humanlike voices in multiple languages and tones. From audiobooks to customer support bots, SynthVoice brings text to life.",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "NeuroSketch",
    title: "NeuroSketch Design AI",
    shortDesc: "AI for Creatives",
    longDesc:
      "Rapidly prototype UI, product sketches, and creative concepts. NeuroSketch combines AI precision with artistic freedom.",
    image:
      "https://images.unsplash.com/photo-1717501219604-cc1902b5d845?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "CoreShield",
    title: "CoreShield Security AI",
    shortDesc: "AI Threat Detection",
    longDesc:
      "Protect your infrastructure with CoreShield. Detect anomalies, stop cyber attacks, and automate compliance with cutting-edge AI.",
    image:
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
  {
    name: "BioGen",
    title: "BioGen Research Assistant",
    shortDesc: "AI for Science",
    longDesc:
      "Accelerate research in biology and medicine. BioGen helps scientists generate hypotheses, analyze data, and model biological systems.",
    image:
      "https://images.unsplash.com/photo-1615946027884-5b6623222bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&h=540",
  },
];

/**
 * Basically a getter of carousel data...we'll use a function in
 * real life yea? ...um like a Tanstack Mutation or similar...
 * @function getCarouselData
 * @returns {Array<typeof CarouselData>} Array of carousel objects
 */
function getCarouselData() {
  return CarouselData;
}
