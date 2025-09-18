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
import { useCallback, useEffect, useState } from "react";
export default function MainCarousel() {
  return (
    <Carousel className="w-95/100">
      <CarouselContent className="-ml-1 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-4/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-9/2 items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
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
