import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAX — Robótica e Impresión 3D | Mérida",
  description:
    "Programa comunitario gratuito de robótica e impresión 3D en Mérida, Yucatán.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
