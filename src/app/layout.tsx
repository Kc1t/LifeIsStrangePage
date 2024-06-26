import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life is Strange.",
  description: "Landing Page desenvolvida por fã!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Life is Strange.</title>
        <meta name="title" content="Life is Strange" />
        <meta name="description" content="Landing Page desenvolvida por fã!" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Kc1t" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* 
        <meta property="og:title" content="AI Solutions" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta property="og:url" content="http://portfolio-kaua.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Offering tour packages for individuals or groups."
        />
        <meta property="og:site_name" content="European Travel, Inc." />
        <meta name="twitter:image:alt" content="Alt text for image" />

        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username" /> */}
        {/* 
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
