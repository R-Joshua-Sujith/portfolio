import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Project from "./components/Project";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
