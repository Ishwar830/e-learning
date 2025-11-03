import { Menu, Globe } from "lucide-react";
import { Link } from "react-router";

function Header({openSideBar}) {
    return (
       <header className="p-4">
          <div className="flex justify-between items-center">
             <button onClick={openSideBar}>
                <Menu />
             </button>
             <Link to="/">
                <p className="text-2xl font-bold tracking-widest antialiased">
                   Logo
                </p>
             </Link>
             <Globe />
          </div>
       </header>
    );
}

export default Header;
