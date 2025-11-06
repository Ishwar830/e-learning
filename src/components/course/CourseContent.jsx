import Accordion from "../Accordion";
import LessonContent from "./LessonContent";

function Lesson({ lesson }) {
   return (
      <Accordion title={lesson.title}>
         <LessonContent lesson={lesson} />
      </Accordion>
   );
}

export default function CourseContent({ lessons }) {
   return (
      <section>
         <h2 className="text-xl font-semibold mb-2">Course Content</h2>
         <ul className="grid gap-1">
            {lessons.map((lesson) => (
               <Lesson key={lesson.id} lesson={lesson} />
            ))}
         </ul>
      </section>
   );
}
