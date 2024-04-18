import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { dark } from '@clerk/themes';




import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";




// meta data
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Alochona",
  description: "Developed by \"Mohsin Reza\" with JS technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider 
    
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/images/logo.png",
        logoPlacement :"inside",
        
      },
      variables: {
        colorText: "#fff",
        colorPrimary: "#0E78F9",
        colorBackground: "#1C1F2E",
        colorInputBackground: "#252A41",
        colorInputText: "#fff",
      },
    }}

    >
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster></Toaster>
        </body>
    </html>
    </ClerkProvider>

  );
}
