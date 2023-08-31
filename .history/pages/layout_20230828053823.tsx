
import Navbar from './../components/Navbar/Navbar'

export default function Layout({ children }: {
children: React.ReactNode;
}) {
return (
    <div className="content">
        <Navbar />
        {children}
    </div>  
    );
}