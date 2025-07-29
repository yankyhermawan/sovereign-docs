const Layout = ({ children }: { children: React.JSX.Element[] | React.JSX.Element }) => {
    return (
        <>
            <div className='px-24 py-10 h-screen relative'>
                {children}
            </div>
        </>
    )
}

export default Layout