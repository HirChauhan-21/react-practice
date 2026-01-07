"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import { Home, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div>
          <img
            src="./images/logo.webp"
            alt="logo"
            className="object-cover h-10 w-full"
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem className="h-10">
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home className="size-6!" />
                <span className=" text-lg">Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="h-10">
            <SidebarMenuButton asChild>
              <Link href="/profile">
                <User className="size-6!" />
                <span className=" text-lg">Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="h-10">
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="size-6!" />
                <span className=" text-lg">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}