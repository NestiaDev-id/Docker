import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBooks from "./pages/DeleteBooks";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBooks />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
    </Routes>
  );
}
