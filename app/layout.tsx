import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

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
      <body className="flex flex-col gap-y-8 min-h-screen min-w-[900px] bg-gray-100">
        {/* 
          Providers is a custom component that wraps the entire application 
          React query, React query devtools 
        */}
        <Providers>
          <Header />
          {/* The main content of the page */}
          <main className="container mx-auto mb-6 px-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
