import { Titillium_Web } from "next/font/google";
import Navbar from "./components/navbar/page";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Santiago Friedrich",
};

const titillium = Titillium_Web({
  weight: ["300", "400", "700"],
  styles: ["italic", "normal"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
