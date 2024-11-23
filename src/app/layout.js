import "./globals.css";

// Importar fuentes desde "next/font/google"
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Usamos variables para manejar fuentes globales en Tailwind
});

export const metadata = {
  title: "Elige tu taller",
  description: "Plataforma para buscar y valorar talleres de bicicletas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-neutral-light text-neutral-dark font-body">
        {/* Aquí podrías agregar un Header o Providers si fuera necesario */}
        {children}
      </body>
    </html>
  );
}
