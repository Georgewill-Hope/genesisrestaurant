import { Inter } from "next/font/google";

import "./globals.css";
import { Download, Footer, Navbar } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Providers from "./providers";
import dynamic from "next/dynamic";
import Providers from "../redux/Providers";

const Modal = dynamic(()=> import("@/components/modal/Modal"),{
  ssr: false,
})


const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Genesis Restaurant | The Best meals are served",
  description: "genesis resturant clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-100/30`}>
        <Providers>
          <Navbar />
          <Modal />
          {children}
          <Download />
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
