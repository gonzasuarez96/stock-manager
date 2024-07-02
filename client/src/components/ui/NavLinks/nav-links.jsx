"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  WrenchIcon,
  ArrowPathIcon,
  ChartBarIcon,
  FolderPlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/context/AuthContext";

const links = [
  { name: "Inicio", href: "/dashboard", icon: ChartBarIcon },
  { name: "Stock", href: "/dashboard/stock", icon: MagnifyingGlassIcon },
  { name: "Proveedores", href: "/dashboard/proveedores", icon: NewspaperIcon },
  { name: "Historial", href: "/dashboard/historial", icon: ArrowPathIcon },
  { name: "Ajustes", href: "/dashboard/ajustes", icon: WrenchIcon },
  { name: "Articulos", href: "/dashboard/articulos", icon: WrenchIcon },
];

export default function NavBar() {
  const pathName = usePathname();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-md mt-5 flex h-[48px] grow items-center justify-center gap-4 rounded-md p-3 font-medium text-txt-custom hover:bg-sky-700 hover:text-white md:flex-none md:justify-center md:p-2 md:px-3",
              {
                "bg-txt-custom text-white": pathName === link.href,
              },
            )}
          >
            <Icon className="w-7" /> {link.name}
          </Link>
        );
      })}
      <button
        className="text-md mt-5 flex h-[48px] grow items-center justify-center gap-4 rounded-md p-3 font-medium text-txt-custom hover:bg-sky-700 hover:text-white md:flex-none md:justify-center md:p-2 md:px-3"
        onClick={handleLogout}
      >
        <ArrowLeftOnRectangleIcon className="w-7" /> Cerrar sesión
      </button>
    </>
  );
}
