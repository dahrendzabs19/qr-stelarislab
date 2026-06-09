"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  url: string;
  logo: string;
}

export default function QrPreview({
  url,
  logo,
}: QrPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: 280,
        height: 280,
        data: url,

        image: logo,

        dotsOptions: {
          color: "#FF5C5C",
          type: "rounded",
        },

        backgroundOptions: {
          color: "#ffffff",
        },

        imageOptions: {
          crossOrigin: "anonymous",
          margin: 8,
        },
      });

      if (qrRef.current) {
        qrCode.current.append(qrRef.current);
      }
    } else {
      qrCode.current.update({
        data: url,
        image: logo,
      });
    }
  }, [url, logo]);

  return (
    <div
      ref={qrRef}
      className="flex items-center justify-center"
    />
  );
}