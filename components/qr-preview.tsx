"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  url: string;
}

export default function QrPreview({
  url,
}: QrPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: 250,
        height: 250,
        data: url,

        dotsOptions: {
          color: "#FF5C5C",
          type: "rounded",
        },

        backgroundOptions: {
          color: "#ffffff",
        },
      });

      if (qrRef.current) {
        qrCode.current.append(qrRef.current);
      }
    } else {
      qrCode.current.update({
        data: url,
      });
    }
  }, [url]);

  return (
    <div
      ref={qrRef}
      className="flex items-center justify-center"
    />
  );
}