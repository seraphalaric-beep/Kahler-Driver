import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kahler Driver Questionnaire",
  description: "CAILR Kahler Driver Questionnaire"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
