import { X, LayoutDashboard } from "lucide-react";
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
               <div className="flex gap-2 mb-8 items-center">
                  <LayoutDashboard size={32} fill="black" />
                  <span className="text-2xl font-semibold">Dashboard</span>
               </div>
               <NavList closeSideBar={closeSideBar} />
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

function NavList({ closeSideBar }) {
   const navItems = [
      {
         title: "Home",
         navLink: "/",
      },
      {
         title: "Login",
         navLink: "/login",
      },
      {
         title: "Signup",
         navLink: "/signup",
      },
      {
         title: "Browse Courses",
         navLink: "/courses",
      },
      {
         title: "My Profile",
         navLink: "/profile",
      },
   ];

   return (
      <ul className="grid gap-4">
         {navItems.map((item) => (
            <NavItem
               key={item.title}
               title={item.title}
               navLink={item.navLink}
               closeSideBar={closeSideBar}
            />
         ))}
      </ul>
   );
}

function NavItem({ title, navLink, closeSideBar }) {
   return (
      <li className="hover:bg-slate-500 hover:text-white p-2"
         onClick={(e) => {
            e.stopPropagation();
            closeSideBar();
         }}
      >
         <Link className="block w-full" to={navLink}>{title}</Link>
      </li>
   );
}
