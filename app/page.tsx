import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-500 text-sm font-medium">
              Stelaris QR
            </div>

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
                className="inline-flex items-center rounded-xl px-8 py-4 text-white font-semibold transition"
                style={{
                  backgroundColor: "#FF5C5C",
                }}
              >
                Make QR
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[320px] h-[320px] bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
              <div className="w-[240px] h-[240px] border-[12px] border-black rounded-xl flex items-center justify-center">
                <div className="w-20 h-20 rounded-xl bg-[#FF5C5C]" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}