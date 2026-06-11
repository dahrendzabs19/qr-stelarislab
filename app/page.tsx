import Link from "next/link";
import Image from "next/image";
import HeroQr from "@/components/hero-qr";

import {
  Globe,
  MessageCircle,
  Wifi,
  Mail,
  CalendarDays,
  QrCode,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link
            href="https://stelarislab.com"
            target="_blank"
            className="transition hover:opacity-80"
          >
            <Image
              src="/stelaris-logo-full.png"
              alt="Stelaris"
              width={160}
              height={45}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Features
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Docs
            </a>

            <Link
              href="/create"
              className="
                bg-[#FF5C5C]
                text-white
                px-5
                py-2.5
                rounded-xl
                font-medium
                hover:opacity-90
                transition
              "
            >
              Create QR
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Create QR Codes
              <br />
              That Match
              <br />
              Your Brand
            </h1>

            <p className="font-body text-base md:text-lg text-gray-600 mt-6 max-w-xl">
              Generate beautiful QR codes for websites,
              WhatsApp, WiFi, email, events, and more.
              Add your logo, customize colors,
              and download instantly.
            </p>

            <div className="mt-8 md:mt-10">
              <Link
                href="/create"
                className="
                  inline-flex
                  items-center
                  rounded-xl
                  px-8
                  py-4
                  text-white
                  font-semibold
                  transition
                  hover:opacity-90
                "
                style={{
                  backgroundColor: "#FF5C5C",
                }}
              >
                Make QR
              </Link>
            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">
            <HeroQr />
          </div>

        </div>

      </section>

{/* Features */}
<section
  id="features"
  className="max-w-7xl mx-auto px-6 py-20"
>
  <div className="text-center">
    <h2 className="text-4xl font-bold text-gray-900">
      Create Any QR You Need
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Generate beautiful QR codes for personal,
      business, marketing, and event needs.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

    {[
  {
  title: "Website QR",
  desc: "Direct visitors to any website instantly.",
  icon: Globe,
  href: "/create?type=website",
},
{
  title: "WhatsApp QR",
  desc: "Start conversations with one scan.",
  icon: MessageCircle,
  href: "/create?type=whatsapp",
},
{
  title: "WiFi QR",
  desc: "Connect guests without typing passwords.",
  icon: Wifi,
  href: "/create?type=wifi",
},
{
  title: "Email QR",
  desc: "Open email drafts automatically.",
  icon: Mail,
  href: "/create?type=email",
},
{
  title: "Event QR",
  desc: "Share event information quickly.",
  icon: CalendarDays,
  href: "/create?type=event",
},
{
  title: "Custom QR",
  desc: "Fully branded QR codes with logos.",
  icon: QrCode,
  href: "/create",
},
].map((item) => {
  const Icon = item.icon;

  return (
  <Link
  href={item.href}
  key={item.title}
  className="
    group
    bg-white
    rounded-3xl
    border
    border-gray-100
    p-8
    shadow-sm
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-300
    cursor-pointer
    block
  "
>
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
  <Icon
  size={24}
  className="
    text-[#FF5C5C]
    transition-all
    duration-300
    group-hover:scale-110
  "
  strokeWidth={2.2}
/>
</div>

        <h3 className="text-xl font-semibold text-gray-900 mt-5">
          {item.title}
        </h3>

        <p className="text-gray-600 mt-3">
          {item.desc}
        </p>
      </Link>
    );
})}

  </div>
</section>

<footer className="border-t border-gray-100 mt-24">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Stelaris QR
        </h3>

        <p className="text-gray-600 mt-2">
          Create beautiful branded QR codes instantly.
        </p>
      </div>

      <div className="flex gap-6 text-gray-600">
        <Link href="/">Home</Link>

        <Link href="/create">
          Create QR
        </Link>

        <Link
          href="https://stelarislab.com"
          target="_blank"
        >
          Stelaris Lab
        </Link>
      </div>

    </div>

    <div className="mt-8 text-sm text-gray-400">
      © 2026 Stelaris Lab
    </div>

  </div>
</footer>

</main>
  );
}