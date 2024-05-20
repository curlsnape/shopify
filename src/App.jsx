import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create.";
import Update from "./components/Update";

function App() {
  const { pathname, search } = useLocation();

  return (
    <div className="w-screen h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="py-1 px-3 bg-zinc-200 text-zinc-400 font-semibold rounded-md absolute left-[17%] top-[6%]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
