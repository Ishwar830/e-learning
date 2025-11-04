import { Link } from "react-router";
import CourseCard from "./CourseCard";

export default function CourseList({courses}){
    return (
       <ul className="grid gap-8">
          {courses.map((course) => {
            return (
               <li key={course.id}>
                  <Link to={`/courses/${course.id}`}>
                     <CourseCard course={course} />
                  </Link>
               </li>
            );
          })}
       </ul>
    );
}