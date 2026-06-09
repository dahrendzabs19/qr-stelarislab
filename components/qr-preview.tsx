"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  url: string;
  logo: string;
  color: string;
}

export default function QrPreview({
  url,
  logo,
  color,
}: QrPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrRef.current) return;

    // Hapus QR lama
    qrRef.current.innerHTML = "";

    // Buat QR baru
    qrCodeRef.current = new QRCodeStyling({
      width: 280,
      height: 280,
      data: url,
      image: logo,

      dotsOptions: {
        color: color,
        type: "rounded",
      },

      backgroundOptions: {
        color: "#ffffff",
      },

      cornersSquareOptions: {
        color: color,
        type: "extra-rounded",
      },

      cornersDotOptions: {
        color: color,
        type: "dot",
      },

      imageOptions: {
        crossOrigin: "anonymous",
        margin: 8,
      },
    });

    qrCodeRef.current.append(qrRef.current);
    (window as any).downloadQR = () => {
  qrCodeRef.current?.download({
    name: "stelaris-qr",
    extension: "png",
  });
};
  }, [url, logo, color]);


  return (
     <div className="flex flex-col items-center justify-center gap-4">
    <div
      ref={qrRef}
      className="flex items-center justify-center"
    />

  </div>
  );
}