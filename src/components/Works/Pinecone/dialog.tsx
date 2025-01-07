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
        <div className="cursor-pointer flex flex-col justify-center group-hover:z-[99999]">
          <div className="bg-black border-[1px] b border-r-4 group-hover:border-b-[1px] border-gray-700 dark:border-gray-600 rounded-md skew-y-2 skew-x-6 group-hover:-skew-x-3 opacity-25 group-hover:opacity-100 group-hover:scale-[4] group-hover:-mt-12 group-hover:mr-56 duration-500 ease-out absolute right-0 mr-48">
            <img
              src="./pine2.jpeg"
              className="blur-3xl group-hover:blur-0 w-24 h-16 rounded-[4px]"
            />
          </div>
          <div className="bg-black border-[1px] b border-r-8 group-hover:border-b-[6px] border-gray-700 dark:border-gray-600 w-28 h-3 group-hover:w-[136px] group-hover:h-0.5 rounded-sm group-hover:rounded-b-xl skew-y-2 -skew-x-[77deg] group-hover:-skew-x-3 opacity-25 group-hover:opacity-100 group-hover:scale-[4] duration-500 ease-out absolute right-0 mt-20 mr-[208px] group-hover:mt-[240px] group-hover:mr-[294px]"></div>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto fixed p-8 inset-0 backdrop-blur-md z-[99999] mx-auto rounded-xl">
        <div className="flex flex-col justify-center">
          <div className="mx-auto relative w-[75%] bg-black bg-opacity-10 dark:bg-opacity-25 border-black dark:border-gray-700 border-2 rounded-3xl p-3">
            <p>2 images</p>
            <DialogClose className="outline-none text-xl border-black top-0 right-0 absolute m-3 dark:border-gray-400 border-2 dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 duration-100 p-3 px-3.5 rounded-full">
              close ⛌
            </DialogClose>
            <div className="flex justify-center flex-col m-2 mt-14 gap-4 shadow-2xl">
              <img
                className="border-2 border-black dark:border-gray-700 rounded"
                src="pine1.jpeg"
              />
              <img
                className="border-2 border-black dark:border-gray-700 rounded"
                src="pine2.jpeg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
