/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Brawl } from "../Brawl";
import { Cinema } from "../Cinema";
import { Meta } from "../Metablog";
import { MKarma } from "../MIDKarma";
import { Pine } from "../Pinecone";
import { bebas } from "@/app/ui/fonts";

export const WorkPage = () => {
  return (
    <div className="w-screen h-screen gap-2 pt-56 group/works relative">
      <div className="peer">
        <Cinema />
        <Meta />
        <Pine />
        <Brawl />
        <MKarma />
      </div>
      <div
        className={`${bebas.className} text-black  dark:text-white text-9xl fixed left-0 bottom-0 ml-4 -mb-32 group-hover/works:mb-0 blur-xl group-hover/works:blur-none group-hover/works:opacity-5 opacity-0 duration-1000`}
      >
        WORKS
      </div>
      <div className="opacity-0 peer-hover:opacity-25 text-black dark:text-indigo-200 fixed right-0 bottom-0 mr-4 mb-4">
        click a device for extra info
      </div>
      <div className="work pointer-events-none delay-5 duration-75 -ml-48 mt-24 size-[600px] absolute rounded-full blur-3xl opacity-[8%] z-50"></div>
    </div>
  );
};
