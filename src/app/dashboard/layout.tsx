"use client";

import AppSidebar from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const sidebar = useMobileSidebar();

  return (
    <div className="app-shell">
      <AppSidebar mobileOpen={sidebar.isOpen} onClose={sidebar.close} />
      <div className="app-main">
        <Header onMenuClick={sidebar.toggle} />
        <main className="flex-1 p-6 lg:p-8 max-w-[1900px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
