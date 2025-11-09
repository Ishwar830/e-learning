import { X } from "lucide-react";
import { Link } from "react-router";

export default function SideNavBar({ isSideBarOpen, closeSideBar }) {
   return (
      <>
         {isSideBarOpen && (
            <div
               className="fixed inset-0 z-10 backdrop-blur-sm lg:hidden"
               onClick={closeSideBar}
            />
         )}
         <aside
            className={`
        fixed lg:static inset-y-0 z-20
        w-64 bg-slate-200 shadow-lg
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:block
        ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
         >
            <nav className="p-4 ">
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/login">Login</Link>
                  </li>
                  <li>
                     <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                     <Link to="/">My Profile</Link>
                  </li>
               </ul>
            </nav>
            {isSideBarOpen && (
               <div className="top-4 -right-16 absolute flex justify-center size-12 rounded-full bg-slate-300">
                  <button onClick={closeSideBar}>
                     <X />
                  </button>
               </div>
            )}
         </aside>
      </>
   );
}
