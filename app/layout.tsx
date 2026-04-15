import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servicio IA - Infraestructura de IA de Alto Rendimiento",
  description: "Ejecuta inferencia, entrenamiento y procesamiento por lotes con arranques sub-segundo, autoescalado instantaneo y experiencia de desarrollo local.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}