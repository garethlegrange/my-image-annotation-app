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
      <body className="flex flex-col gap-y-8 min-h-screen min-w-[900px]">
        <Providers>
          <Header />
          <div className="container mx-auto grow flex gap-x-8">
            <SideBar />
            <main>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
