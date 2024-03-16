import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Cryptocurrency from "./pages/cryptocurrency/Cryptocurrency";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="*" element={<Navigate to="/get/" replace />} />

          {/* Route for cryptocurrency */}
          <Route path="/get/:coin?" element={<Cryptocurrency />} />

          {/* Catch-all route for 404 */}
          {/* <Route path="*" element={<div>Not found 404</div>} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
