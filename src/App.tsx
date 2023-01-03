import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Post from "./components/Post";
import About from "./components/About";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<SinglePost />} path="/post:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<Project />} path="/project" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
