import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./About";
import Games from "./Game";
import Login from "./Components/Login";
import Register from "./Components/Register";

import NavScrollExample from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post/src/Post";
import Create from "./Post/src/Create";
import BlogDetails from "./Post/src/PostDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* post */}
        <Route path="/post" element={<Post />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
