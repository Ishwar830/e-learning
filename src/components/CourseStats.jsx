import { Star } from "lucide-react";

export default function CourseStats() {
   return (
      <div className="flex gap-4 text-sm text-slate-800">
         <span className="font-bold bg-emerald-300 text-emerald-800 border p-1 rounded-sm border-slate-400 ">
            BestSeller
         </span>
         <span className="flex gap-1 items-center border p-1 rounded-sm border-slate-400 ">
            <Star size={16} fill="#FFD700" strokeWidth={1} /> 4.4
         </span>
         <span className="border p-1 rounded-sm border-slate-400 ">
            10,855 ratings
         </span>
      </div>
   );
}
