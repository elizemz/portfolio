"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Modal } from "./dialog";

export const MKarma = () => {
  return (
    <div className="group px-16">
      <div className="text-black dark:text-white">
        <div className="flex flex-row">
          <div className="opacity-25 text-5xl group-hover:opacity-100 font-bold tracking-tighter duration-100">
            MID.KARMA
          </div>
          <div className="ml-[182px] opacity-0 group-hover:opacity-25 mt-2.5">
            -
          </div>
          <div className="opacity-0 text-xs group-hover:text-xl group-hover:opacity-100 ml-12 text-indigo-950 dark:text-blue-100">
            <div className="font-medium uppercase">PLAYER STAT TRACKER</div>
            <div className="opacity-60">UI/UX · Fully Responsive</div>
            <div className="opacity-40 max-w-80">
              a brawl stars player data fetcher made for fun
            </div>
          </div>
          <Modal />
        </div>
        <div className="w-[50%] h-0.5 bg-black dark:bg-white opacity-5 group-hover:mt-1"></div>
      </div>
    </div>
  );
};
