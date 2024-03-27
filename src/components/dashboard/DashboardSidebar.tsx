'use client'

import { Sidebar, SidebarItemGroup } from 'flowbite-react';
import SidebarMenu from './sidebar/sidebarMenu';
import { Metadata } from 'next';

export default function DashboardSidebar() {
  const sidebar = SidebarMenu;

  return (
    <Sidebar className='min-h-screen' aria-label="Default sidebar example">
         <Sidebar.Items>
            <SidebarItemGroup>
            {sidebar.map((item, index) => (
                <Sidebar.Item key={index} href={item.path} icon={item.icon}>
                  {item.titile}
                </Sidebar.Item>
            ))}  
            </SidebarItemGroup>
         </Sidebar.Items>
    </Sidebar>
  );
}
