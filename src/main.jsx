import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import CourseListView from "./pages/CourseListView.jsx";
import CourseDetail from "./pages/CourseDetails.jsx";
import Home from "./pages/Home.jsx";
import fakeAPI from "./services/fakeAPI.js";

const router = createBrowserRouter([
   {
      path: "/",
      Component: RootLayout,
      children: [
         {
            index: true,
            Component: Home,
            loader: async ({ request }) => {
               const url = new URL(request.url);
               const filters = {
                  search: url.searchParams.get("query") || "",
                  level: url.searchParams.get("level") || "",
                  sortBy: url.searchParams.get("sortBy") || "",
               };
               const response = await fakeAPI.getCourses(filters);
               if (response.success) {
                  return { courses: response.data };
               }
               throw new Error();
            },
         },
         {
            path: "courses",
            Component: CourseListView,
            loader: async ({ request }) => {
               const url = new URL(request.url);
               const filters = {
                  search: url.searchParams.get("query") || "",
                  level: url.searchParams.get("level") || "",
                  sortBy: url.searchParams.get("sortBy") || "",
               };
               const response = await fakeAPI.getCourses(filters);
               if (response.success) {
                  return { courses: response.data };
               }
               throw new Error();
            },
         },
         {
            path: "courses/:courseId",
            Component: CourseDetail,
            loader: async ({ params }) => {
               const response = await fakeAPI.getCourseById(params.courseId);
               if (response.success) {
                  return { course: response.data };
               }
               throw new Error();
            },
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
