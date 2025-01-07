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
        <div className="cursor-pointer flex flex-col justify-center group-hover:z-[9999]">
          <div className="bg-black border-[1px] border-r-4 border-black dark:border-gray-500 rounded-md -skew-y-6 -skew-x-3 opacity-40 group-hover:opacity-100 group-hover:skew-x-3 group-hover:scale-[3.5] group-hover:mt-6 group-hover:mr-[220px] duration-500 ease-out absolute right-0 mr-40 -mt-12">
            <img
              src="./cinema1.jpeg"
              className="blur-3xl group-hover:blur-0 w-[120px] h-20 rounded-md"
            />
          </div>
          <div className="bg-black dark:bg-gray-700 border-[1px] border-r-2 border-black dark:border-gray-700 w-2 h-5 rounded-xs -skew-y-6 -skew-x-3 opacity-40 group-hover:opacity-100 group-hover:skew-x-3 group-hover:scale-[3.5] group-hover:mt-[380px] group-hover:mr-[262px] duration-500 ease-out absolute mr-[220px] right-0 mt-[52px]"></div>
          <div className="bg-gray-800 border-[1px] border-r-2 border-black dark:border-gray-700 w-12 h-0.5 rounded-sm -skew-y-6 -skew-x-3 opacity-40 group-hover:opacity-100 group-hover:skew-x-3 group-hover:scale-[3.5] group-hover:mt-[444px] group-hover:mr-[244px] duration-500 ease-out absolute mr-[202px] right-0 mt-[74px]"></div>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto fixed p-8 inset-0 backdrop-blur-md z-[99999] mx-auto rounded-xl">
        <div className="flex flex-col justify-center">
          <div className="mx-auto relative w-[75%] bg-black bg-opacity-10 dark:bg-opacity-25 border-black dark:border-gray-700 border-2 rounded-3xl p-3">
            <p>3 images</p>
            <DialogClose className="outline-none text-xl border-black top-0 right-0 absolute m-3 dark:border-gray-400 border-2 dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 duration-100 p-3 px-3.5 rounded-full">
              close ⛌
            </DialogClose>
            <div className="flex justify-center flex-col m-2 mt-14 gap-4 shadow-2xl">
              <img
                className="border-2 border-black dark:border-gray-700 rounded"
                src="cinema1.jpeg"
              />
              <img
                className="border-2 border-black dark:border-gray-700 rounded"
                src="cinema2.jpeg"
              />
              <img
                className="max-w-80 border-2 border-black dark:border-gray-700 rounded"
                src="cinema3.jpeg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
