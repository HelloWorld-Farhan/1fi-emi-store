import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1Fi EMI Store",
  description: "Buy your favorite electronics on easy EMI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <header className="navbar">
            <Link href="/" className="navbar-brand">
              <ShoppingCart size={28} />
              <span>1Fi EMI Store</span>
            </Link>
          </header>
          <main style={{ padding: '40px 0' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
