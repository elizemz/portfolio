/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Modal } from "./dialog";

export const Meta = () => {
  return (
    <div className="group flex flex-col px-16">
      <div className="flex flex-row text-black dark:text-white ">
        <div className="flex flex-row">
          <div className="opacity-25 text-5xl group-hover:opacity-100 font-bold tracking-tighter duration-100">
            METABLOG
          </div>
          <div className="ml-48 opacity-0 group-hover:opacity-25 mt-2.5">-</div>
          <div className="opacity-0 text-xs group-hover:text-xl group-hover:opacity-100 ml-12 text-indigo-950 dark:text-blue-100">
            <div className="font-medium uppercase">social media website</div>
            <div className="opacity-60">UI/UX · Responsive Practice</div>
            <div className="opacity-40 max-w-96">
              attempted a retro, handheld console style
            </div>
          </div>
        </div>
        <Modal />
      </div>
      <div className="w-[50%] h-0.5 bg-black dark:bg-white opacity-5 group-hover:mt-1"></div>
    </div>
  );
};
