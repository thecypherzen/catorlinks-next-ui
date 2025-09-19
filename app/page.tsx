"use client";

import MainCarousel from "@/components/MainCarousel";
import PageWrapper from "@/components/PageWrapper";
import { QuickActions } from "@/components/quickActions";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col items-center justify-center min-h-[calc(100svh-100px)] py-6">
      <MainCarousel />
      <QuickActions />
    </PageWrapper>
  );
}
