"use client";

import { useState } from "react";
import QrPreview from "@/components/qr-preview";

export default function CreatePage() {
  const [url, setUrl] = useState("https://stelarislab.com");

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-heading text-4xl font-bold text-gray-900">
            Create QR Code
          </h1>

          <p className="font-body text-gray-600 mt-2">
            Customize your QR code and add your brand logo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-8">
          {/* Settings Panel */}
          <div className="border border-gray-200 rounded-3xl p-6">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-6">
              Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  QR Type
                </label>

                <select className="w-full border border-gray-200 rounded-xl px-4 py-3">
                  <option>Website</option>
                  <option>WhatsApp</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WiFi</option>
                  <option>Text</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination URL
                </label>

                <input
                  type="text"
                  value={url}
                  spellCheck={false}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://stelarislab.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Color
                </label>

                <input
                  type="color"
                  defaultValue="#ff5c5c"
                  className="w-full h-12 border border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Logo
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                />
              </div>

              <button
                className="
                  w-full
                  bg-[#FF5C5C]
                  hover:bg-[#ff4d4d]
                  text-white
                  font-semibold
                  py-3
                  rounded-xl
                  transition-all
                "
              >
                Download QR
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="border border-gray-200 rounded-3xl p-6 flex items-center justify-center min-h-[600px]">
            <div className="w-[350px] h-[350px] bg-white border rounded-3xl shadow-lg flex items-center justify-center">
              <QrPreview url={url} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}