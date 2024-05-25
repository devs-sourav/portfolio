import { Inter } from "next/font/google";
import "./globals.css";

import LeftSide from "@/components/LeftSide";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F1F1F] mx-auto grid grid-cols-12 py-0 pl-0 md:py-2 md:pl-4 `}>
        <LeftSide/>
        <div className=" h-[97vh] pl-4  lg:pl-20 pr-4 lg:pr-12 pb-8 md:pb-14 text-white overflow-y-scroll leftScroll col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </body>
    </html>
  );
}
