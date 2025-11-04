import { SquarePlay } from "lucide-react";

export default function LessonContent({ lesson }) {
   return (
      <ul className="grid gap-2">
         {lesson.sections.map((section) => (
            <li className="p-4 flex gap-2 items-center border-b border-slate-500 last-of-type:border-0 " key={section}>
               <SquarePlay />
               <span>{section}</span>
            </li>
         ))}
      </ul>
   );
}
