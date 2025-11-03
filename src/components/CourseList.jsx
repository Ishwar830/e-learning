import CourseCard from "./CourseCard";

export default function CourseList(){
    return (
       <ul className="grid gap-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
       </ul>
    );
}