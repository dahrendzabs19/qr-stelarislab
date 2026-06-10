"use client";

import { useState } from "react";
import Link from "next/link";
import QrPreview from "@/components/qr-preview";
import { toast } from "sonner";

export default function CreatePage() {
const [qrType, setQrType] = useState("website");

  const [url, setUrl] = useState("https://stelarislab.com");
  const [logo, setLogo] = useState("/stelaris-logo.png");
  const [color, setColor] = useState("#FF5C5C");
  const [template, setTemplate] = useState("rounded");
  const [backgroundColor, setBackgroundColor] =
  useState("#FFFFFF");

  const [useLogo, setUseLogo] = useState(true);
  const [logoSize, setLogoSize] = useState(45);

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

                <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    QR Style
  </label>

  <select
    value={template}
    onChange={(e) => setTemplate(e.target.value)}
    className="
      w-full
      border
      border-gray-200
      rounded-xl
      px-4
      py-3
      text-gray-900
    "
  >
    <option value="square">Classic</option>
    <option value="rounded">Rounded</option>
    <option value="dots">Dots</option>
    <option value="extra">Premium</option>
  </select>
</div>

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
    className="
      w-full
      h-12
      border
      border-gray-200
      rounded-xl
      cursor-pointer
      mb-4
    "
  />

<div className="flex gap-2 mt-3 mb-4">
  {[
    "#FF5C5C",
    "#000000",
    "#1E3A8A",
    "#D4AF37",
    "#7C3AED",
  ].map((preset) => (
    <button
      key={preset}
      type="button"
      onClick={() => setColor(preset)}
      className={`
        w-8
        h-8
        rounded-full
        border-2
        transition-all
        hover:scale-110
        ${
          color === preset
            ? "border-gray-900 scale-110"
            : "border-white"
        }
      `}
      style={{
        backgroundColor: preset,
      }}
    />
  ))}
</div>

  <label className="block text-sm font-medium text-gray-700 mb-2">
    Background Color
  </label>

  <input
    type="color"
    value={backgroundColor}
    onChange={(e) => setBackgroundColor(e.target.value)}
    className="
      w-full
      h-12
      border
      border-gray-200
      rounded-xl
      cursor-pointer
    "
  />
</div>

              <div>
  <div className="flex items-center justify-between mb-3">
    <label className="block text-sm font-medium text-gray-900">
      Upload Logo
    </label>

    <button
      type="button"
      onClick={() => setUseLogo(!useLogo)}
      className={`
        relative
        w-12
        h-7
        rounded-full
        transition-all
        ${useLogo ? "bg-[#FF5C5C]" : "bg-gray-300"}
      `}
    >
      <span
        className={`
          absolute
          top-1
          w-5
          h-5
          bg-white
          rounded-full
          transition-all
          ${useLogo ? "left-6" : "left-1"}
        `}
      />
    </button>
  </div>

{useLogo && (
  <div className="mt-4">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-900">
        Logo Size
      </span>

      <span className="text-sm text-gray-500">
        {logoSize}%
      </span>
    </div>

    <input
  type="range"
  min="20"
  max="60"
  value={logoSize}
  onChange={(e) => setLogoSize(Number(e.target.value))}
  className="w-full accent-[#FF5C5C]"
/>
  </div>
)}

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

             <div className="grid grid-cols-2 gap-3">
  <button
    onClick={() => {
  (window as any).downloadQR?.("png");
  toast.success("PNG downloaded successfully");
}}
    className="
      bg-[#FF5C5C]
      hover:bg-[#ff4d4d]
      active:scale-[0.98]
      text-white
      py-3
      rounded-xl
      font-semibold
      shadow-sm
      hover:shadow-md
      transition-all
      duration-200
      cursor-pointer
    "
  >
    Download PNG
  </button>

  <button
    onClick={() => {
  (window as any).downloadQR?.("svg");
  toast.success("SVG downloaded successfully");
}}
    className="
      border
      border-[#FF5C5C]
      text-[#FF5C5C]
      bg-white
      hover:bg-[#FFF1F1]
      hover:border-[#ff4d4d]
      hover:text-[#ff4d4d]
      active:scale-[0.98]
      py-3
      rounded-xl
      font-semibold
      shadow-sm
      hover:shadow-md
      transition-all
      duration-200
      cursor-pointer
    "
  >
    Download SVG
  </button>
</div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="border border-gray-200 rounded-3xl p-6 flex items-center justify-center min-h-[600px]">
            <div
  className="
    relative
    w-[350px]
    h-[350px]
    border
    rounded-3xl
    shadow-lg
    flex
    items-center
    justify-center
  "
  style={{
    background:
      backgroundColor === "#ffffff"
        ? "#ffffff"
        : backgroundColor,
  }}
>
 <QrPreview
  url={qrData}
  logo={useLogo ? logo : ""}
  color={color}
  backgroundColor={backgroundColor}
  logoSize={logoSize}
  template={template}
/>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}