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
        <Providers>
          <Header />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
