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
        <div className="cursor-pointer bg-black group-hover:bg-gray-300 dark:group-hover:bg-gray-500 border-[1px] border-b-4 border-r-4 group-hover:border-b-[1px] group-hover:border-t-2 border-black dark:border-gray-400 w-[92px] h-14 rounded-md -skew-y-6 group-hover:skew-y-3 opacity-20 group-hover:opacity-100 group-hover:scale-[4] group-hover:mr-56 duration-500 ease-out mt-10 absolute right-0 mr-40 group-hover:z-[9999]">
          <img src="" />
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto fixed p-8 inset-0 backdrop-blur-md z-[99999] mx-auto rounded-xl opacity-0 hover:opacity-100 duration-200">
        <div className="flex flex-col justify-center">
          <div className="mx-auto relative w-[75%] bg-black bg-opacity-10 dark:bg-opacity-25 border-black dark:border-gray-700 border-2 rounded-3xl p-3">
            <p>0 images</p>
            <DialogClose className="outline-none text-xl border-black top-0 right-0 absolute m-3 dark:border-gray-400 border-2 dark:hover:bg-white hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-5 duration-100 p-3 px-3.5 rounded-full">
              close ⛌
            </DialogClose>
            <div className="flex justify-center flex-col m-2 mt-14 gap-4 shadow-2xl"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
