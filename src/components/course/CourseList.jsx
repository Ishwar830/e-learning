import { Link, useNavigate } from "react-router";
import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
   const navigate = useNavigate();
   return (
      <ul className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
         {courses.map((course) => {
            return (
               <li
                  key={course.id}
                  onClick={() => navigate(`/courses/${course.id}`)}
               >
                  <CourseCard course={course} />
               </li>
            );
         })}
      </ul>
   );
}
