import NavBar from '../presentational/NavBar';
import Footer from '../presentational/Footer';

export default function AppLayout({children}){
    return(
        <>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}