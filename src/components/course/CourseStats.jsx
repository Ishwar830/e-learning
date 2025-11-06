import { Star } from "lucide-react";

export default function CourseStats({rating, studentsEnrolled, tag, level}) {
   const tagStyles = {
      BestSeller: "bg-emerald-300 text-emerald-800",
      "Hot & New": "bg-red-300 text-red-800",
   };

   return (
      <div className="flex flex-wrap gap-4 text-sm text-slate-800">
         <span
            className={`${tagStyles[tag]} font-bold border p-1 rounded-sm border-slate-400`}
         >
            {tag}
         </span>
         <span className="flex gap-1 items-center border p-1 rounded-sm border-slate-400 ">
            <Star size={16} fill="#FFD700" strokeWidth={1} /> {rating}
         </span>
         <span className="border p-1 rounded-sm border-slate-400 ">
            {`${studentsEnrolled} Students`}
         </span>
         <span className="border p-1 rounded-sm border-slate-400">{level}</span>
      </div>
   );
}
