
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader
} from '@/components/ui/sidebar';
import { Home, Calendar, Award, Target, Activity, Heart } from 'lucide-react';

type SidebarNavProps = {
  children: React.ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps) {
  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen w-full">
      <Sidebar className="border-r border-eco-sand">
        <SidebarHeader className="py-4 flex items-center justify-center">
          <span className="text-eco-forest font-semibold text-lg">Eco Quest</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/" className="flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#habits" className="flex items-center gap-3">
                  <Activity className="h-5 w-5" />
                  <span>My Habits</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#calendar" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span>Calendar</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#challenges" className="flex items-center gap-3">
                  <Target className="h-5 w-5" />
                  <span>Challenges</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#achievements" className="flex items-center gap-3">
                  <Award className="h-5 w-5" />
                  <span>Achievements</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#impact" className="flex items-center gap-3">
                  <Heart className="h-5 w-5" />
                  <span>My Impact</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <SidebarTrigger className="absolute top-4 left-4 z-50 lg:hidden" />
        {children}
      </div>
    </div>
  );
}
