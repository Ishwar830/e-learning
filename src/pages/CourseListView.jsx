import { Search } from "lucide-react";
import CourseList from "../components/CourseList";

export default function CourseListView() {
   return (
      <section className=" grid gap-4 p-4">
         <div className="grid gap-4">
            <div className="flex gap-2 items-center">
               <search className="flex-1 border rounded-md h-8 p-1"></search>
               <Search />
            </div>
            <div className="flex gap-2">
               <p className="flex gap-2">
                  <label htmlFor="filter-courses">Filter</label>
                  <select
                     className="border"
                     name="filter-courses"
                     id="filter-courses"
                  >
                     <option value="owned">Owned</option>
                     <option value="not owned">Not Owned</option>
                  </select>
               </p>
               <p className="flex gap-2">
                  <label htmlFor="sort-courses">Sort</label>
                  <select
                     className="border"
                     name="sort-courses"
                     id="sort-courses"
                  >
                     <option value="popularity">Popularity</option>
                     <option value="ratings">Ratings</option>
                  </select>
               </p>
            </div>
         </div>
         <CourseList />
      </section>
   );
}
