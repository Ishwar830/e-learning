import { X } from "lucide-react";

export default function SideNavBar({ isSideBarOpen, closeSideBar }) {
   return (
      <>
         {isSideBarOpen && (
            <div
               className="fixed inset-0 backdrop-blur-sm lg:hidden"
               onClick={closeSideBar}
            />
         )}
         <aside
            className={`
        fixed lg:static inset-y-0
        w-64 bg-slate-200 shadow-lg
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:block
        ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
         >
            <nav className="p-4 ">
               <ul>
                  <li>link-1</li>
                  <li>link-2</li>
                  <li>link-3</li>
                  <li>link-4</li>
                  <li>link-5</li>
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
