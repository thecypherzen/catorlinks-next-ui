import Link from "next/link";
import { Logo } from "./Logo";
import PageWrapper from "./PageWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Footer() {
  return (
    <footer className="bg-neutral-950 dark:bg-neutral-900 text-neutral-100 dark:text-neutral-300">
      <PageWrapper className="flex items-center gap-4 justify-between py-5 min-h-[18vh]">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center h-full bg-neutral-800/80 dark:bg-neutral-950 rounded-md aspect-square p-3">
            <Logo invert />
          </div>
          <h2 className="text-2xl font-bold">Krea AI</h2>
        </div>
        <div className="flex items-center gap-3">
          <h5 className="text-lg font-extrabold font-stretch-expanded">
            curated by
          </h5>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/106164348?v=4"
                alt="@user"
              />
              <AvatarFallback>WI</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-neutral-400 text-sm font-normal">
                William Inyam
              </h3>
              <div className="flex items-center gap-2 divide-x divide-neutral-500">
                <span className="text-xs font-medium uppercase text-neutral-200 dark:text-neutral-300 p-0 pr-2 hover:underline">
                  <Link href="https://github.com/thecypherzen" target="_blank">
                    Github
                  </Link>
                </span>
                <span className="text-xs font-medium uppercase text-neutral-200 dark:text-neutral-300 p-0 hover:underline">
                  <Link href="mailto:sw.inyam@outlook.com">Email</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </footer>
  );
}
