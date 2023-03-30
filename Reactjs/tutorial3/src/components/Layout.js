import Header from "./Header"

function Layout() {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
