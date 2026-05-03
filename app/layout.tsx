import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bàaxal Wayak' — Robótica e impresión 3D gratis para niñas y niños de Mérida",
  description:
    "Programa comunitario gratuito de robótica e impresión 3D para niñas y niños de Mérida, Yucatán. Cohortes pequeñas, proyectos prácticos, sin costo.",
  openGraph: {
    title: "Bàaxal Wayak' — Robótica e impresión 3D gratis en Mérida",
    description:
      "Programa comunitario gratuito de robótica e impresión 3D para niñas y niños de Mérida, Yucatán.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
