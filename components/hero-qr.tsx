"use client";

import Image from "next/image";

export default function HeroQr() {
  return (
    <div className="animate-float">
      <div
        className="
          w-[280px]
          h-[280px]
          md:w-[340px]
          md:h-[340px]
          bg-white
          rounded-3xl
          shadow-xl
          border
          border-gray-100
          flex
          items-center
          justify-center
        "
      >
        <div className="relative">

          {/* QR */}
          <div className="grid grid-cols-9 gap-1 md:gap-1.5">
            {[
              1,1,1,1,0,1,1,1,1,
              1,0,0,1,0,1,0,0,1,
              1,0,1,1,1,1,1,0,1,
              1,1,1,0,0,0,1,1,1,
              0,0,1,1,1,1,1,0,0,
              1,1,1,0,1,0,1,1,1,
              1,0,1,1,1,1,1,0,1,
              1,0,0,1,0,1,0,0,1,
              1,1,1,1,0,1,1,1,1,
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  w-4 h-4 md:w-5 md:h-5
                  rounded-md
                  ${item ? "bg-[#FF5C5C]" : "bg-transparent"}
                `}
              />
            ))}
          </div>

          {/* Logo Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                w-16 h-16
                md:w-20 md:h-20
                bg-white
                rounded-2xl
                shadow-lg
                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/stelaris-logo.png"
                alt="Stelaris"
                width={40}
                height={40}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}