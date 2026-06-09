"use client";

import { useState } from "react";
import Link from "next/link";
import QrPreview from "@/components/qr-preview";

export default function CreatePage() {
const [qrType, setQrType] = useState("website");

  const [url, setUrl] = useState("https://stelarislab.com");
  const [logo, setLogo] = useState("/stelaris-logo.png");
  const [color, setColor] = useState("#FF5C5C");
  const [wifiPassword, setWifiPassword] = useState("");
const [wifiSecurity, setWifiSecurity] = useState("WPA");

  let qrData = url;

if (qrType === "whatsapp") {
  qrData = `https://wa.me/${url}`;
}

if (qrType === "email") {
  qrData = `mailto:${url}`;
}

if (qrType === "phone") {
  qrData = `tel:${url}`;
}

if (qrType === "wifi") {
  qrData = `WIFI:T:${wifiSecurity};S:${url};P:${wifiPassword};;`;
}

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">

  <Link
    href="/"
    className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      bg-[#FFF1F1]
      text-[#FF5C5C]
      text-sm
      font-medium
      hover:bg-[#FFE4E4]
      transition-all
      mb-4
    "
  >
    ← Back Home
  </Link>

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

                <select
  value={qrType}
  onChange={(e) => setQrType(e.target.value)}
  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
>
                  <option value="website">Website</option>
<option value="whatsapp">WhatsApp</option>
<option value="email">Email</option>
<option value="phone">Phone</option>
<option value="wifi">WiFi</option>
<option value="text">Text</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {qrType === "website" && "Destination URL"}
{qrType === "whatsapp" && "WhatsApp Number"}
{qrType === "email" && "Email Address"}
{qrType === "phone" && "Phone Number"}
{qrType === "wifi" && "WiFi Network"}
{qrType === "text" && "Text Content"}
                </label>

                <input
                  type="text"
                  value={url}
                  spellCheck={false}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={
  qrType === "website"
    ? "https://stelarislab.com"
    : qrType === "whatsapp"
    ? "628123456789"
    : qrType === "email"
    ? "hello@stelarislab.com"
    : qrType === "phone"
    ? "+628123456789"
    : qrType === "wifi"
    ? "Nama WiFi"
    : "Write your text"
}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
                />
                {qrType === "wifi" && (
  <>
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>

      <input
        type="text"
        value={wifiPassword}
        onChange={(e) => setWifiPassword(e.target.value)}
        placeholder="WiFi Password"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
      />
    </div>

    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Security
      </label>

      <select
        value={wifiSecurity}
        onChange={(e) => setWifiSecurity(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
      >
        <option value="WPA">WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="nopass">No Password</option>
      </select>
    </div>
  </>
)}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Color
                </label>

                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-12 border border-gray-200 rounded-xl"
                />

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Logo
                </label>

                <input
  type="file"
  accept="image/*"
  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setLogo(imageUrl);
  }}
/>
              </div>

              <button
              onClick={() => {
    (window as any).downloadQR?.();
  }}
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
              <QrPreview
  url={qrData}
  logo={logo}
  color={color}
/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}