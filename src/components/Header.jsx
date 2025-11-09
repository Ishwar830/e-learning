import { Menu, Globe } from "lucide-react";
import { Link } from "react-router";

function Header({openSideBar}) {
    return (
       <header className="sticky top-0 z-5 bg-white shadow-lg p-4 lg:px-[clamp(16px,10%,80px)]">
          <div className="flex justify-between items-center">
             <button className="md:hidden" onClick={openSideBar}>
                <Menu />
             </button>
             <Link to="/">
                <p className="text-2xl font-bold tracking-widest">Logo</p>
             </Link>
             <nav className="hidden md:flex items-center gap-8">
                <Link
                   className="p-2 px-4 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white"
                   to="/"
                >
                   Home
                </Link>
                <Link
                   className="p-2 px-4 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white"
                   to="/courses"
                >
                   Courses
                </Link>
                <Link
                   className="p-2 px-4 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white"
                   to="/profile"
                >
                   My Profile
                </Link>
                <Link
                   className="p-2 px-4 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white"
                   to="/login"
                >
                   Login
                </Link>
                <Link
                   className="p-2 px-4 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white"
                   to="/signup"
                >
                   Signup
                </Link>
             </nav>
             <Globe />
          </div>
       </header>
    );
}

export default Header;
