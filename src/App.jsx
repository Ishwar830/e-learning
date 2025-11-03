import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetails";

function RootLayout(){
  return(
    <>
      <Header/>
      <CourseDetail/>
      <Footer/>
    </>
  );
}


function App() {
   return (
      <div>
         <RootLayout/>
      </div>
   );
}

export default App;
