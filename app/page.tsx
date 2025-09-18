"use client";

import MainCarousel from "@/components/MainCarousel";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col items-center justify-center h-[calc(100svh-100px)]">
      <MainCarousel />
    </PageWrapper>
  );
}
