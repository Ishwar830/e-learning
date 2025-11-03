import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout(){
  return(
    <>
      <Header/>
      <Home/>
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
