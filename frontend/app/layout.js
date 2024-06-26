import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/nav";
import SearchProvider from "./components/searchProvider";
import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musicat",
  description: "Review your favorite music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background h-screen`}>
        <div className="ml-[180px] h-full"> {/* margin left equivalent to Navbar width */}
          <ClerkProvider>
            <SearchProvider>
              <div className=" z-[100]">
                <Navbar />
              </div>
              <div className="h-full flex flex-col items-center overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-custom-cards">
                {/* <SignedIn> */}
                  {children}
                {/* </SignedIn>
                <SignedOut>
                  <p>Please sign in to continue</p>
                </SignedOut> */}
              </div>
            </SearchProvider>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}
