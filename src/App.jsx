import React from "react";
import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Developments from "./pages/Developments";
import Project from "./pages/Project";
import About from "./pages/About";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
function NotFound(){return <div className="container section-pad"><h1>Page not found</h1><a href="/">Return home</a></div>}
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="team" element={<Team/>}/><Route path="faq" element={<FAQ/>}/><Route path="developments" element={<Developments/>}/><Route path="developments/:slug" element={<Project/>}/><Route path="insights" element={<Insights/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}