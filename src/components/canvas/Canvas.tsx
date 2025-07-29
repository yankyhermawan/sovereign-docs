import { SidebarProvider } from '../ui/sidebar'
import { AppSidebar } from '../sidebar/Sidebar'


const Canvas = ({ children }: { children: React.JSX.Element[] | React.JSX.Element }) => {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <main>
                <div className="flex flex-col gap-12 pt-20">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Canvas