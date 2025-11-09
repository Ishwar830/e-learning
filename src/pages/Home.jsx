import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import CourseList from "../components/course/CourseList";
import { useEffect } from "react";

function Home() {
   const { courses } = useLoaderData();
   const trendingCourses = courses.slice(0, 3);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div className="h-[300px] bg-sky-400">Banner</div>
         <div className="p-4 flex justify-center gap-4">
            <Link to="/login">
               <button className="font-semibold text-lg border w-24 border-slate-800 p-2 rounded-md">
                  Log In
               </button>
            </Link>
            <Link to="/signup">
               <button className="font-semibold text-lg border w-24 border-slate-800 p-2 rounded-md bg-gray-800 text-white">
                  Sign Up
               </button>
            </Link>
         </div>
         <TrendingCourseList trendingCourses={trendingCourses} />
      </>
   );
}

function TrendingCourseList({ trendingCourses }) {
   return (
      <section className="p-4">
         <div className="flex items-center justify-between py-2 px-4">
            <h2 className="text-xl">Trending</h2>
            <p className="flex items-center">
               <Link to="/courses">Browse All</Link>
               <ChevronRight size={20} />
            </p>
         </div>
         <CourseList courses={trendingCourses} />
      </section>
   );
}

export default Home;
