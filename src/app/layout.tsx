import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouMeals",
  description: "An app for meal planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ul className="m-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/page1">Page 1 - client side only</Link>
            </li>
            <li>
              <Link href="/static-page">
                Page 2 - static page generated at build time
              </Link>
            </li>
            <li>
              <Link href="/1">
                Post 1 - static page generated at build time
              </Link>
            </li>
            <li>
              <Link href="/2">
                Post 2 - static page generated at build time
              </Link>
            </li>
            <li>
              <Link href="/asset/?id=53862">Asset 53862</Link>
            </li>
          </ul>
          <div className="m-4 pt-4 text-xl border-t-2">{children}</div>
        </>
      </body>
    </html>
  );
}
