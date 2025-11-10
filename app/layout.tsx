import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

// Aeonik (Local Fonts)
const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

// Inter (Google Font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Averon AI — Building AI Workflows Around You",
  description: "We build personalised AI workflows, assistants, and automation systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${aeonik.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}