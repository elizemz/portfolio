"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@radix-ui/react-dialog";

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer bg-black border-[0.5px] border-b-4 border-r-[3px] group-hover:border-b-[0.5px] border-gray-800 dark:border-gray-500 rounded-lg group-hover:rounded-[5px] -skew-y-2 -skew-x-[9deg] group-hover:skew-x-2 opacity-25 group-hover:opacity-100 group-hover:scale-[5] group-hover:mt-6 group-hover:mr-56 duration-500 ease-out absolute right-0 -mt-3 mr-24 group-hover:z-[99999]">
          <img
            src="./meta2.jpeg"
            className="blur-3xl group-hover:blur-0 w-12 h-[84px] rounded-[4px]"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto fixed p-8 inset-0 backdrop-blur-md z-[99999] mx-auto rounded-xl ">
        <div className="flex flex-col justify-center">
          <div className="mx-auto relative w-[75%] bg-black bg-opacity-10 dark:bg-opacity-25 border-black dark:border-gray-700 border-2 rounded-3xl p-3">
            <p>3 images</p>
            <DialogClose className="outline-none text-xl border-black top-0 right-0 absolute m-3 dark:border-gray-400 border-2 dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 duration-100 p-3 px-3.5 rounded-full">
              close ⛌
            </DialogClose>
            <div className="flex justify-center flex-col m-2 mt-14 gap-4 shadow-2xl">
              <img
                className="border-2 border-black dark:border-gray-700 rounded"
                src="meta1.jpeg"
              />
              <div className="flex gap-4">
                <img
                  className="max-w-80 border-2 border-black dark:border-gray-700 rounded"
                  src="meta2.jpeg"
                />
                <img
                  className="max-w-80 border-2 border-black dark:border-gray-700 rounded"
                  src="meta3.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
