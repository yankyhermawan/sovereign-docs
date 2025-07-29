import { Home } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import programs from "@/common/program"
import { useNavigate, useLocation } from "react-router-dom"

export function AppSidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const getIcon = (icon: string) => {
        if (icon === 'home') {
            return <Home />
        }
    }

    const getAdditionalClassName = (path: string) => {
        if (path !== pathname) {
            return ''
        }
        return 'bg-gray-200'
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {programs.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild className={`cursor-pointer ${getAdditionalClassName(item.url)}`}>
                                <div onClick={() => navigate(item.url)}>
                                    {getIcon(item.icon)}
                                    <span>{item.title}</span>
                                </div>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}