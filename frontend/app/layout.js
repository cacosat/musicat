import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/nav";
import { Button } from "@/components/ui/button";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musicat",
  description: "Review your favorite music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <div className="ml-[180px]"> {/* margin left equivalent to Navbar width */}
          <div className="">
            <Navbar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
