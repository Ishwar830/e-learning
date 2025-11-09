import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavBar from "../components/SideNavBar";
import { useState } from "react";

export default function RootLayout() {
   const [isSideBarOpen, setIsSideBarOpen] = useState(false);

   const openSideBar = () => setIsSideBarOpen(true);
   const closeSideBar = () => setIsSideBarOpen(false);

   return (
      <div>
         {
            <SideNavBar
               isSideBarOpen={isSideBarOpen}
               closeSideBar={closeSideBar}
            />
         }
         <Header openSideBar={openSideBar} />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
