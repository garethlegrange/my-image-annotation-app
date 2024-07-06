import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Image Annotation Viewer",
  description: "My image annotation viewer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div>
            <SideBar />
            <main>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
