import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ModalView from "./components/ModalView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/' element={<ModalView />} />
      </Routes>
    </Router>
  );
}

export default App;
