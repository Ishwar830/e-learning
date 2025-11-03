import CourseCard from "../components/CourseCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

function Home() {
   return (
      <>
         <div className="h-[300px] bg-sky-400"></div>
         <div className="p-4 flex justify-center gap-4">
            <button className="font-semibold text-lg border w-24 border-slate-800 p-2 rounded-md">
               Log In
            </button>
            <button className="font-semibold text-lg border w-24 border-slate-800 p-2 rounded-md bg-gray-800 text-white">
               Sign Up
            </button>
         </div>
         <section className="p-4">
            <div className="flex items-center justify-between py-2 px-4">
               <h2 className="text-xl">Trending</h2>
               <p className="flex items-center">
                  <Link to="/courses">Browse All</Link>
                  <ChevronRight size={20} />
               </p>
            </div>
            <ul className="grid gap-4">
               <li>
                  <Link to="/courses/0">
                     <CourseCard />
                  </Link>
               </li>
               <li>
                  <CourseCard />
               </li>
               <li>
                  <CourseCard />
               </li>
            </ul>
         </section>
      </>
   );
}

export default Home;
