import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from '../sidebar/Sidebar'
import { useIsMobile } from '@/hooks/use-mobile'


const Canvas = ({ children }: { children: React.JSX.Element[] | React.JSX.Element }) => {
    const isMobile = useIsMobile()
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <main>
                {isMobile && <SidebarTrigger/>}
                <div className="flex flex-col gap-12 pt-20 text-xs md:text-sm">
                    {children}
                </div>
                <div className='min-h-20'>
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Canvas