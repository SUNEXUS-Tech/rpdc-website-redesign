import React, {useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import {ArrowUpRight, Menu, X, Instagram, Linkedin, Facebook} from "lucide-react";
import {navItems} from "../data";
const media = "https://rpdcltd.com/wp-content/uploads/elementor/thumbs/";
export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header">
   <div className="topline"><div className="container topline-inner"><span>PROPERTY DEVELOPMENT · PROJECT MANAGEMENT · JOINT VENTURES</span><span>Lagos, Nigeria <i className="dot"/> Mon–Fri, 8:00am–5:00pm</span></div></div>
   <div className="container nav-wrap">
     <Link to="/" className="brand" onClick={()=>setOpen(false)}><img className="brand-logo" src={media+"RPDC-Logo-qo9m89onbdho9ivgbqhkrd529baj7ji9bk3n05ezgg.png"} alt="RPDC Limited"/></Link>
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
   <div className="footer-brand"><Link to="/" className="brand light"><img className="brand-logo brand-logo-light" src={media+"RPDC-Logo-White-qo9m70ke7brvretrxe1v0bqfq4jpdrxl0oifv7y4u8.png"} alt="RPDC Limited"/></Link><p>We listen better. Plan better. Build better.<br/>Your trusted partner in property development success.</p></div>
   <div><h4>Explore</h4><Link to="/about">About RPDC</Link><Link to="/developments">Our projects</Link><Link to="/team">Our team</Link><Link to="/insights">Insights</Link><Link to="/faq">Frequently asked questions</Link></div>
   <div><h4>Get in touch</h4><a href="mailto:info@rpdcltd.com">Email RPDC</a><a href="tel:+2348033371353">+234 803 337 1353</a><a href="tel:+2348077733324">+234 807 773 3324</a><span>Suite C402, 4th Floor, Ogba Central Mall, Abiodun Jagun Road, off WEMCO Road, Ogba, Lagos.</span></div>
   <div><h4>Connect</h4><div className="socials"><a href="https://www.linkedin.com/company/rpdc-limited" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a></div><p className="small-note">Social profile links require RPDC confirmation.</p></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RPDC Limited. All rights reserved.</span><span>Digital experience by SUNEXUS</span></div></footer>
}
export default function Layout(){return <><Header/><main><Outlet/></main><Footer/></>}
