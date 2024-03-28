"use client";

import { Sidebar } from "flowbite-react";
import { sideBarItem } from "./sidebarMenu";
import UserTable from "@/components/table/UserTable";

export default function DashboardSidebar() {
  return (
    <Sidebar className="min-h-screen" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarItem.map((item, index) => (
            <Sidebar.Item key={index} href={item.path} icon={item.icon}>
              {item.title}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}