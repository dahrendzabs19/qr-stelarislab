import Link from "next/link";
import Image from "next/image";
import HeroQr from "@/components/hero-qr";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <Link
              href="https://stelarislab.com"
              target="_blank"
              className="inline-block transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/stelaris-logo-full.png"
                alt="Stelaris"
                width={180}
                height={50}
                priority
              />
            </Link>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mt-6 leading-tight">
              Create QR Codes
              <br />
              That Match
              <br />
              Your Brand
            </h1>

            <p className="font-body text-lg text-gray-600 mt-6 max-w-xl">
              Generate beautiful QR codes for websites, WhatsApp,
              WiFi, email, events, and more. Add your logo,
              customize colors, and download instantly.
            </p>

            <div className="mt-10">
              <Link
                href="/create"
                className="inline-flex items-center rounded-xl px-8 py-4 text-white font-semibold transition hover:opacity-90"
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
    </main>
  );
}