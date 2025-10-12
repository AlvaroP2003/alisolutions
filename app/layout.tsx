import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins', // optional for Tailwind
});

export const metadata: Metadata = {
  title: "Ali Solutions",
  description: "We build scalable web apps for modern businesses.",
  icons: {
    icon: '/favicon.png',
  },
   openGraph: {
    title: "Ali Solutions",
    description: "We build scalable web apps for modern businesses.",
    url: "https://alisolutions.co.za",
    siteName: "Ali Solutions",
    images: [
      {
        url: "/email_profile.png", // <-- image in your public folder
        width: 1200,
        height: 630,
        alt: "Ali Solutions Preview Image",
      },
    ],
    locale: "en_ZA",
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
      <body
        className={`${poppins.className} antialiased bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
