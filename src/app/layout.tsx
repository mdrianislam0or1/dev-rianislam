import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import TransitonProvider from "@/components/Shared/transitionProvider";

export const metadata: Metadata = {
  title: "rian-islam-portfolio",
  description: "rian-islam-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <TransitonProvider>
            {children}
          </TransitonProvider>
        </body>
      </html>
    </Providers>
  );
}
