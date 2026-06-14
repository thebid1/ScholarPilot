import type { Metadata, Viewport } from "next";
import "./globals.css";
import RegisterSW from "@/app/components/RegisterSW";

export const metadata: Metadata = {
  title: "ScholarPilot AI",
  description: "Your AI-powered scholarship application copilot",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "ScholarPilot AI",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className="font-sans antialiased page-bg min-h-[100dvh]">
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
