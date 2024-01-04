import React from "react";
import Header from "./pages/home/Header";
import Main from "./pages/home/Main";
import Footer from "./pages/home/Footer";
import './styles.css'


function App() {
  return (
    <div className="bg-slate-50">
     <Header/>  
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;