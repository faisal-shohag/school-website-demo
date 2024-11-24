

import localFont from "next/font/local";
import "./globals.css";
import { SchoolNavbar } from "@/components/common/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Vishal Bharti Senior Secondary School",
//   description: "Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider attribute="class" defaultTheme="light">
       <main>
        <SchoolNavbar/>
        {children}
        </main>
        </ThemeProvider>
      
      </body>

    </html>
  );
}
