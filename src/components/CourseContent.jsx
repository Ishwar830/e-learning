import Accordion from "./Accordion";
import LessonContent from "./LessonContent";

function Lesson(){
    return (
        <Accordion>
            <LessonContent />
        </Accordion>
    );
}


export default function CourseContent(){
    return (
       <section>
          <h2 className="text-xl font-semibold mb-2">Course Content</h2>
          <ul className="grid gap-1">
             <Lesson />
             <Lesson />
             <Lesson />
          </ul>
       </section>
    );
}