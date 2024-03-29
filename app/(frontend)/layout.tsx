import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./../../styles/main.scss";
import { Providers } from "../providers";
import Header from "@/modules/@common/@layout/header";
import Footer from "@/modules/@common/@layout/footer";

const noto = Noto_Serif_Bengali({
  variable: "--font-noto",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  );
}
