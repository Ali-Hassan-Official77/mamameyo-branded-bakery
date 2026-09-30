import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/providers";
export const runtime = 'edge';

export const metadata: Metadata = {
  title: { default: "MamMameyo — Premium Bakery & Desserts", template: "%s — MamMameyo" },
  description: "MamMameyo is a premium bakery in Bahria Town, Rawalpindi, serving celebration cakes, pastries, desserts, breads and beautiful gift boxes.",
  keywords: ["MamMameyo", "bakery Rawalpindi", "Bahria Town bakery", "cakes Rawalpindi", "custom cakes", "desserts Pakistan"],
  openGraph: {
    title: "MamMameyo — Premium Bakery & Desserts",
    description: "Freshly baked in Bahria Town, Rawalpindi.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><AppProvider>{children}</AppProvider>
  <script src="https://cdn.zanderio.ai/widget/loader.js" data-id="wdg_mp6xX9Kvs38mD1tnz82MYhx6" defer></script>
  </body></html>;
}
