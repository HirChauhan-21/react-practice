"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Home, User, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
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