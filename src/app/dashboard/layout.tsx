import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import NavbarComponent from "@/components/layouts/NavbarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
   <DashboardSidebar/>
    {children}
   </aside>
  );
}
