import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewProvider } from "@/context/viewContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Confidence Connector",
  description: "AI Health Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ViewProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ViewProvider>
    </html>
  );
}
