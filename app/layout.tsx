import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Dashboard",
  description: "Next-Gen Student Learning Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
