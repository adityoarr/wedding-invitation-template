import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Wedding of Adiststi & Ainul",
  description: "Undangan Pernikahan Adiststi & Ainul",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
  },
  metadataBase: new URL("https://adiststi-ainul-wedding.web.app/"),
  openGraph: {
    title: "Adiststi & Ainul Wedding",
    description: "The Wedding of Adiststi Qania Putri & Muhammad Ainul Yaqin",
    url: "https://adiststi-ainul-wedding.web.app/",
    siteName: "adiststi-ainul-wedding",
    images: {
      url: "/img/couple/cover2.png",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, "scroll-smooth"].join(" ")}>
        {children}
      </body>
    </html>
  );
}
