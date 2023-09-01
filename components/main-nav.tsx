"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  const saleActive = pathname === '/sale';

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      <Link
      key="On Sale"
      href="/sale"
      className={cn(
        'text-sm font-medium transition-colors hover:text-slate-300',
        saleActive ? 'text-white' : 'text-neutral-50'
      )}
      >
        Sale
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-slate-300',
            route.active ? 'text-white' : 'text-neutral-50'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;
