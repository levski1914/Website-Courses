import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./Components/Main";
import Courses from "./Components/Courses";
import LearningPaths from "./Components/LearningPaths";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

//Create loading line on top of page while click on navbar links

//loading line

const LoadingLine = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div
        className="loading-line"
        style={{ width: loading ? "100%" : "0%" }}
      ></div>
    </>
  );
};
//where have to put loading line
//
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
