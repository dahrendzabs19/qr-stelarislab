"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  url: string;
  logo: string;
  color: string;
  logoSize: number;
}

export default function QrPreview({
  url,
  logo,
  color,
  logoSize,
}: QrPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrRef.current) return;

    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling({
        width: 280,
        height: 280,

        data: url,

        image: logo || undefined,

        dotsOptions: {
          color,
          type: "rounded",
        },

        cornersSquareOptions: {
          color,
          type: "extra-rounded",
        },

        cornersDotOptions: {
          color,
          type: "dot",
        },

        backgroundOptions: {
          color: "#ffffff",
        },

        imageOptions: {
  crossOrigin: "anonymous",
  margin: 12,
  hideBackgroundDots: true,
  imageSize: logoSize / 100,
},
      });

      qrCodeRef.current.append(qrRef.current);
    } else {
      qrCodeRef.current.update({
        data: url,
        image: logo || undefined,

        dotsOptions: {
          color,
          type: "rounded",
        },

        cornersSquareOptions: {
          color,
          type: "extra-rounded",
        },

        cornersDotOptions: {
          color,
          type: "dot",
        },

        imageOptions: {
          crossOrigin: "anonymous",
          margin: 8,
          imageSize: logoSize / 100,
        },
      });
    }

    (window as any).downloadQR = () => {
      qrCodeRef.current?.download({
        name: "stelaris-qr",
        extension: "png",
      });
    };
  }, [url, logo, color, logoSize]);

  return (
    <div
      ref={qrRef}
      className="flex items-center justify-center"
    />
  );
}