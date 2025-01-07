/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { bebas } from "@/app/ui/fonts";
import copy from "copy-to-clipboard";

export const Contact = () => {
  const copyNumber = () => {
    copy("+97699703989");
    alert(`Phone number copied !`);
  };

  const copyEmail = () => {
    copy("bellegutter@gmail.com");
    alert(`Email copied !`);
  };

  return (
    <div className={`group/contact h-screen relative uppercase`}>
      <div className="flex justify-center m-auto align-middle items-center h-[100%]">
        <div className="rounded-full flex row justify-center m-auto text-2xl font-medium gap-3">
          <div className="text-right gap-1 flex flex-col font-semibold">
            <p className="text-gray-700 dark:text-gray-100">phone number</p>
            <p className="text-gray-900 dark:text-gray-200">facebook </p>
            <p className="text-black dark:text-gray-300">email</p>
          </div>
          <div className="h-[100px] mt-1 w-[1px] bg-gray-500"></div>
          <div className="gap-1 flex flex-col lowercase">
            <button
              onClick={copyNumber}
              className="hover:underline pointer-events-auto text-gray-800 dark:text-gray-100 flex flex-row"
            >
              <p className="text-gray-600 dark:text-gray-400">+976</p>99703989
            </button>
            <a
              className="hover:underline pointer-events-auto text-gray-900 dark:text-gray-200 capitalize"
              href="https://www.facebook.com/profile.php?id=61550356257225"
              target="_blank"
            >
              Belgutei Enkhmaa
            </a>
            <button
              onClick={copyEmail}
              className="hover:underline pointer-events-auto text-black dark:text-gray-300"
            >
              bellegutter@gmail.com
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${bebas.className} text-black dark:text-white blur-xl group-hover/contact:blur-none text-9xl fixed left-0 bottom-0 ml-4 -mb-32 group-hover/contact:mb-0 group-hover/contact:opacity-5 opacity-0 duration-1000`}
      >
        CONTACT ME
      </div>
      <div className="contact pointer-events-none delay-5 duration-75 right-0 bottom-0 size-[500px] absolute rounded-full blur-3xl opacity-[8%] z-50"></div>
    </div>
  );
};
