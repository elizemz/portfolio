/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export const Bio = () => {
  return (
    <div className="group/bio h-screen relative py-48 px-16">
      <div className="w-full relative text-black dark:text-white">
        <p className="opacity-50 text-4xl font-medium tracking-tighter">
          hello, i am a
        </p>
        <p className="text-6xl font-medium tracking-tighter">
          wannabe ui/ux designer
        </p>
        <p className="opacity-50 text-5xl font-medium tracking-tighter mt-2 ml-[496px]">
          and a
        </p>
      </div>
      <div className="peer/dev bg-gray-800 opacity-25 dark:opacity-50 text-gray-800 hover:text-white hover:opacity-100 dark:hover:opacity-100 text-7xl text-right duration-100 w-[605px] ml-1 font-bold tracking-tighter p-0.5 mt-5">
        FRONTEND DEV
      </div>
      <div className="peer/dg bg-gray-800 opacity-25 dark:opacity-50 text-gray-800 hover:text-white hover:opacity-100 dark:hover:opacity-100 text-7xl text-right duration-100 w-[605px] ml-1 font-bold tracking-tighter p-0.5 mt-2">
        DEATH GRIPS FAN
      </div>
      <div className="peer/art bg-gray-800 opacity-25 dark:opacity-50 text-gray-800 hover:text-white hover:opacity-100 dark:hover:opacity-100 text-7xl text-right duration-100 w-[605px] ml-1 font-bold tracking-tighter p-0.5 mt-2">
        ART LOVER
      </div>
      <div className="opacity-0 peer-hover/dg:opacity-100 duration-100 absolute top-0 right-0 mr-32">
        <img
          className="w-64 opacity-85 rotate-3 z-10 mt-40"
          src="https://www.plaidroomrecords.com/cdn/shop/products/26fbb196e105f6808f34c231dc02b922.jpg?v=1510181850"
        />
        <img
          className="w-64 -rotate-6 z-20 -mt-20 -ml-32"
          src="https://m.media-amazon.com/images/I/71EYmWxcmdL._UF1000,1000_QL80_.jpg"
        />
        <img
          className="w-64 -rotate-3 z-20 -mt-32 -ml-10"
          src="https://images.genius.com/b97b7cfbb317ca48ca042b354319cf6b.1000x1000x1.png"
        />
      </div>
      <div className="opacity-0 peer-hover/art:opacity-100 duration-100 absolute top-0 right-0 mr-24">
        <img className="w-56  opacity-100 z-20 mt-36 -ml-48" src="./art3.jpg" />
        <img className="w-56  opacity-100 z-10 -mt-40" src="./art2.png" />
        <img
          className="w-56  opacity-100 z-10 -mt-32 -ml-24"
          src="./art.jpeg"
        />
      </div>

      <div className="opacity-0 peer-hover/dev:opacity-100 duration-100 absolute top-0 right-0 mr-36 mt-48 gap-10 grid grid-cols-2 ">
        <img
          className="w-32"
          src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png"
        />
        <img
          className="w-28"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
        <img
          className="w-36"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
        />
        <img
          className="w-36"
          src="https://www.loopple.com/img/tailwind-logo.png"
        />
        <img
          className="w-28"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
        />
        <img
          className="w-32"
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        />
      </div>
      <div className="bio pointer-events-none delay-5 duration-75 right-0 -mt-80 size-[600px] absolute rounded-full blur-3xl opacity-[7%] z-50"></div>
    </div>
  );
};
