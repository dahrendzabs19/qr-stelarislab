"use client";

import Image from "next/image";

export default function HeroQr() {
  return (
    <div className="animate-float">
      <div className="w-[420px] h-[420px] bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
        <div className="relative">

          {/* QR */}
          <div className="grid grid-cols-9 gap-1.5">
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
                  w-5 h-5 rounded-md
                  ${item ? "bg-[#FF5C5C]" : "bg-transparent"}
                `}
              />
            ))}
          </div>

          {/* Logo Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center">
              <Image
                src="/stelaris-logo.png"
                alt="Stelaris"
                width={52}
                height={52}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}