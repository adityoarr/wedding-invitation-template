import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Wedding of Lacus & Kira",
  description: "Undangan Pernikahan Lacus & Kira",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
  },
  metadataBase: new URL("https://adityoarr-wedding-invitation-template-v1.vercel.app/"),
  openGraph: {
    title: "Lacus & Kira Wedding",
    description: "The Wedding of Lacus Clyne & Kira Yamato",
    url: "https://adityoarr-wedding-invitation-template-v1.vercel.app/",
    siteName: "adiststi-ainul-wedding",
    images: {
      url: "/img/couple-old.jpg",
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
