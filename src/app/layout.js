import NavBarApp from "./componentes/layout/NavBarApp";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

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
        <NavBarApp />
        <GlobalProvider>{children}</GlobalProvider>

      </body>
    </html>
  );
}

