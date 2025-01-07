"use client";
import { Bio, Contact } from "@/components";
import { Mousefollow } from "@/components";
import { WorkPage } from "@/components/Works/Page";
import { useRef } from "react";
import { bebas } from "@/app/ui/fonts";
import { Language } from "@/components";
import { ThemeToggle } from "@/components";

export default function Home() {
  const bioRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <main>
      <div className="z-50">
        <header className="fixed scroll-smooth z-[99999]">
          <div
            className={`w-screen flex justify-center tracking-tighter h-full mt-1`}
          >
            <div className="m-4 bg-transparent backdrop-blur-sm border-black dark:border-gray-500 border-2 p-4 pb-2.5 px-5 rounded-3xl absolute left-0 ml-12 flex justify-center text-2xl text-black dark:text-gray-200 gap-12">
              <div className="w-40 font-medium">Belgutei Azjargal&apos;s</div>
              <div className={`${bebas.className} text-7xl -ml-24`}>
                PORTFOLIO
              </div>
            </div>
            <div className="items-center flex h-full justify-center">
              <div className="absolute right-0 mt-[104px] mr-12 flex flex-row items-center">
                <Language />
                <div className="mr-4">
                  <ThemeToggle />
                </div>
                <div className="bg-transparent backdrop-blur-sm border-black dark:border-gray-500 border-2 p-1 h-full rounded-full flex justify-center text-3xl text-black dark:text-white gap-6">
                  <button
                    onClick={() => {
                      bioRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="dark:hover:bg-white hover:bg-black bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-5 backdrop-blur-sm duration-100 p-3 px-3.5 rounded-full"
                  >
                    bio
                  </button>
                  <button
                    onClick={() => {
                      worksRef.current?.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      });
                    }}
                    className="dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 backdrop-blur-sm duration-100 p-3 px-3.5 rounded-full"
                  >
                    works
                  </button>
                  <button
                    onClick={() => {
                      contactRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 backdrop-blur-sm duration-100 p-3 px-3.5 rounded-full"
                  >
                    contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div ref={bioRef}>
          <Bio />
        </div>

        <div ref={worksRef}>
          <WorkPage />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Mousefollow />
    </main>
  );
}
