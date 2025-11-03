import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './layouts/RootLayout.jsx';
import CourseListView from './pages/CourseListView.jsx';
import CourseDetail from './pages/CourseDetails.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {index: true, Component: Home},
      {path: "courses", Component: CourseListView},
      {path: "courses/0", Component: CourseDetail}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
