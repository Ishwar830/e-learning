import { useLoaderData } from "react-router";
import { useEffect } from "react";
import CourseContent from "../components/course/CourseContent";
import CourseDetailHeader from "../components/course/CourseDetailHeader";

export default function CourseDetail() {
   const { course } = useLoaderData();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="p-4 grid gap-4">
         <CourseDetailHeader course={course} />
         <div className="place-self-center">
            <button className="bg-slate-800 text-white p-2 text-lg font-semibold rounded-md">
               Enroll Now
            </button>
         </div>
         <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{course.longDescription}</p>
         </div>
         <CourseContent lessons={course.lessons} />
      </div>
   );
}
