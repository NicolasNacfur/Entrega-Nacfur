import Header from "../components/Header/Header.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function MainLayout({children}) {
    return (
        <>
            <Header />
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
