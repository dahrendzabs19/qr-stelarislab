"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  url: string;
  logo: string;
  color: string;
  backgroundColor: string;
  logoSize: number;
   template: string;
}

export default function QrPreview({
  url,
  logo,
  color,
  backgroundColor,
  logoSize,
  template,
}: QrPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    const qrType =
  template === "square"
    ? "square"
    : template === "dots"
    ? "dots"
    : template === "extra"
    ? "extra-rounded"
    : "rounded";
    
    if (!qrRef.current) return;

    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling({
        width: 280,
        height: 280,

        data: url,

        image: logo || undefined,

        dotsOptions: {
  color,
  type: qrType as any,
},

        cornersSquareOptions: {
  color,
  type:
    template === "square"
      ? "square"
      : "extra-rounded",
},

        cornersDotOptions: {
          color,
          type: "dot",
        },

        backgroundOptions: {
          color: backgroundColor,
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
  type: qrType as any,
},

        cornersSquareOptions: {
  color,
  type:
    template === "square"
      ? "square"
      : "extra-rounded",
},

        cornersDotOptions: {
          color,
          type: "dot",
        },

        backgroundOptions: {
          color: backgroundColor,
        },

        imageOptions: {
          crossOrigin: "anonymous",
          margin: 12,
          hideBackgroundDots: true,
          imageSize: logoSize / 100,
        },
      });
    }

    (window as any).downloadQR = (
      extension: "png" | "svg" = "png"
    ) => {
      qrCodeRef.current?.download({
        name: "stelaris-qr",
        extension,
      });
    };
  }, [
  url,
  logo,
  color,
  backgroundColor,
  logoSize,
  template,
]);

  return (
    <div
      ref={qrRef}
      className="flex items-center justify-center"
    />
  );
}