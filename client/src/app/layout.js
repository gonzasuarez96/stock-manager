import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Gestión de Inventario",
  description: "Sistema de Gestión de Inventario hecho por No-Country",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es">
        <body className={inter.className}>
          <Toaster position="top-center" richColors />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
