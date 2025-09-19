import { HandCoins, Scale } from "lucide-react";
import {
  AppSection,
  AppSectionControl,
  AppSectionHeader,
  AppSectionTitle,
} from "./AppSection";

export function GallerySection() {
  const style =
    "px-4 py-1 rounded-full bg-neutral-200 dark:bg-foreground/10  text-neutral-800 dark:text-neutral-400 flex items-center justify-center gap-1 text-xs font-medium hover:!border-[0.2px] hover:border-neutral-300 dark:hover:border-neutral-300 hover:scale-[1.05] dark:hover:bg-neutral-900 cursor-pointer transiation-transform duration-300";
  return (
    <AppSection>
      <AppSectionHeader>
        <AppSectionTitle>Gallery</AppSectionTitle>
        <AppSectionControl>
          <div className={style}>
            <span>
              <Scale size="16px" />
            </span>
            <span>Legal</span>
          </div>
          <div className={style}>
            <span>
              <HandCoins size="16px" />
            </span>
            <span>Pricing</span>
          </div>
        </AppSectionControl>
      </AppSectionHeader>
    </AppSection>
  );
}
