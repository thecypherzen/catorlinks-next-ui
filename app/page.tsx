"use client";

import { GallerySection } from "@/components/GallerySection";
import MainCarousel from "@/components/MainCarousel";
import PageWrapper from "@/components/PageWrapper";
import { QuickActionsSection } from "@/components/QuickActions";

/**
 * The App's Outlet for the main content
 * @function Home
 * @returns {HTMLDivElement} The main content
 */
export default function Home() {
  return (
    <PageWrapper className="flex flex-col items-center justify-center min-h-[calc(100svh-100px)] py-6">
      <MainCarousel />
      <QuickActionsSection />
      <GallerySection />
    </PageWrapper>
  );
}
