import React, { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showResume, setShowResume] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  console.log(showResume);
  console.log(showProject);
  console.log(showContact);

  useEffect(() => {
    // Check if showResume value is stored in localStorage
    const storedShowResume = localStorage.getItem("showResume");
    if (storedShowResume) {
      setShowResume(JSON.parse(storedShowResume));
    }
  }, []);

  useEffect(() => {
    const storedShowProject = localStorage.getItem("showProject");
    if (storedShowProject) {
      setShowProject(JSON.parse(storedShowProject));
    }
   }, []);

   useEffect(() => {
    const storedShowContact = localStorage.getItem("showContact");
    if (storedShowContact) {
      setShowProject(JSON.parse(storedShowContact));
    }
   }, []);

  const resumeHandleChange = () => {
    setShowResume(true);
    localStorage.setItem("showResume", JSON.stringify(true)); // Store showResume value in localStorage
  };

  const projectHandleChange = () => {
    setShowProject(true);
    localStorage.setItem("showProject", JSON.stringify(true));
  }

  const contactHandleChange = () => {
    setShowContact(true);
    localStorage.setItem("showContact", JSON.stringify(true));
  }


  return (
    <Router>
      <div className="container">
        <Header onClickResume={resumeHandleChange} onClickProject={projectHandleChange}
        onClickContact ={contactHandleChange} />
        <Routes>
          <Route path="/components/Resume" element={<Resume />} />
          <Route path="/components/Project" element={<Project />} />
          <Route path="/components/Contact" element={<Contact/>}/>
          <Route path="*" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
