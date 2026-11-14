import React, {useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import {ArrowUpRight, Menu, X, Instagram, Linkedin, Facebook} from "lucide-react";
import {navItems} from "../data";

export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header">
   <div className="topline"><div className="container topline-inner"><span>REAL ESTATE · DEVELOPMENT · PARTNERSHIPS</span><span>Lagos, Nigeria <i className="dot"/> Mon–Fri, 8:00am–5:00pm</span></div></div>
   <div className="container nav-wrap">
     <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">R</span><span className="brand-copy"><b>RPDC</b><small>LIMITED</small></span></Link>
     <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
     <nav className={open?"nav-links open":"nav-links"}>
       {navItems.map(([label,path])=><NavLink key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}
       <Link className="nav-cta" to="/contact" onClick={()=>setOpen(false)}>Start a conversation <ArrowUpRight size={16}/></Link>
     </nav>
   </div>
 </header>
}
export function Footer(){
 return <footer className="footer"><div className="container footer-main">
   <div className="footer-brand"><Link to="/" className="brand light"><span className="brand-mark">R</span><span className="brand-copy"><b>RPDC</b><small>LIMITED</small></span></Link><p>Shaping spaces. Building value.<br/>Creating places for people, business and possibility.</p></div>
   <div><h4>Explore</h4><Link to="/about">About RPDC</Link><Link to="/developments">Our developments</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link></div>
   <div><h4>Get in touch</h4><a href="mailto:info@rpdcltd.com">info@rpdcltd.com</a><a href="tel:+2348033371353">+234 803 337 1353</a><span>Ogba, Lagos, Nigeria</span></div>
   <div><h4>Connect</h4><div className="socials"><a href="https://www.linkedin.com/company/rpdc-limited" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a></div><p className="small-note">Social links shown as presentation placeholders.</p></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RPDC Limited. All rights reserved.</span><span>Proposed digital experience · Prepared by SUNEXUS</span></div></footer>
}
export default function Layout(){return <><Header/><main><Outlet/></main><Footer/></>}