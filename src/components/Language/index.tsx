// "use client";
// import Link from "next/link";

// export const Language = () => {
//   return (
//     <div className="m-4 bg-black dark:border-gray-300 dark:border-2 p-4 px-5 h-full rounded-full flex justify-center text-3xl text-white gap-12 lowercase pointer-events-auto">
//       <select defaultValue="en" className="bg-black">
//         <Link href="/en">
//           <option value="en">
//             <a>english</a>
//           </option>
//         </Link>
//         <Link href="/mn">
//           <option value="mn">
//             <a>монгол</a>
//           </option>
//         </Link>
//       </select>
//     </div>
//   );
// };
"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export const Language = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="m-4 bg-transparent backdrop-blur-sm border-opacity-10 border-black dark:border-gray-800 border-2 p-2 px-3 h-full rounded-full flex justify-center text-xl text-black dark:text-gray-400 opacity-50 hover:opacity-100 gap-12 lowercase">
      <select
        defaultValue={localActive}
        className="bg-transparent dark:bg-transparent outline-none"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">english</option>
        <option value="mn">монгол</option>
      </select>
    </div>
  );
};
