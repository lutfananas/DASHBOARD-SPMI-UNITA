import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard SPMI - Universitas Tulungagung",
  description: "Sistem Pemantauan Mutu Internal berbasis Audit Mutu Internal (AMI) sesuai Permen 39/2025. Dashboard komprehensif untuk 33 Standar SPMI, 8 IKU, dan dokumen mutu.",
  keywords: ["SPMI", "AMI", "Penjaminan Mutu", "Permen 39/2025", "Universitas Tulungagung", "Audit Mutu Internal"],
  authors: [{ name: "Pusat Penjaminan Mutu UNITA" }],
  icons: {
    icon: "/unita-logo.png",
    apple: "/unita-logo.png",
  },
  openGraph: {
    title: "Dashboard SPMI UNITA",
    description: "Pemantauan Sistem Penjaminan Mutu Internal Universitas Tulungagung",
    siteName: "SPMI Dashboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard SPMI UNITA",
    description: "Pemantauan Sistem Penjaminan Mutu Internal Universitas Tulungagung",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
