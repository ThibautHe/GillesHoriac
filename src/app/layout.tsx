import type { Metadata } from "next";
import { Lora} from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const LoraRegular = Lora({
  style: ["italic"],
  weight: ["400"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gilles Horiac",
  description: "Auteur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LoraRegular.className} font-black`}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
