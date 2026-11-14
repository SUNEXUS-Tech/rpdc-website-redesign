import React from "react";
import {Link} from "react-router-dom";
import {ArrowDown,ArrowUpRight} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import {projects} from "../data";
const media="https://rpdcltd.com/wp-content/uploads";
export default function Home(){
 return <>
  <section className="hero">
   <img className="hero-image" src={media+"/2025/04/Alaba-Multipurpose-Martet-8.jpeg"} alt="Alaba International Modern Market architectural rendering"/>
   <div className="hero-shade"/>
   <div className="container hero-content"><div className="eyebrow light-eyebrow"><span/> PROPERTY DEVELOPMENT · LAGOS, NIGERIA</div><h1>We listen better.<br/><em>Plan better.</em><br/>Build better.</h1><p>RPDC Limited is a property development company partnering with landowners and stakeholders to develop and manage properties that create value.</p><div className="hero-actions"><Link className="button button-light" to="/developments">Explore our projects <ArrowUpRight size={17}/></Link><Link className="button button-ghost" to="/about">Discover RPDC</Link></div></div>
   <div className="hero-bottom container"><span>PROPERTY DEVELOPMENT · PROJECT MANAGEMENT</span><span className="scroll-hint"><ArrowDown size={15}/> SCROLL TO EXPLORE</span></div>
  </section>
  <section className="intro-section section-pad"><div className="container intro-grid"><div className="section-kicker">01 / WHO WE ARE</div><div><p className="display-copy">Your trusted partner in <span>property development success.</span></p><div className="intro-foot"><p>RPDC Limited prides itself on completing projects under joint venture arrangements with developers and landowners seeking to transform land into estates and shopping complexes. The company also describes a project-management role in the Ogba Multipurpose Complex.</p><Link className="text-link" to="/about">Get to know RPDC <ArrowUpRight size={16}/></Link></div></div></div></section>
  <section className="projects-section section-pad"><div className="container"><div className="section-heading"><div><div className="section-kicker">02 / SELECTED PROJECTS</div><h2>Places with<br/><em>purpose.</em></h2></div><Link className="text-link" to="/developments">View all projects <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div></section>
  <section className="statement-section"><div className="statement-image"><img src={media+"/2024/05/yellow-construction-crane-against-the-blue-sky-infrastructure.jpg"} alt="Construction crane"/></div><div className="statement-copy"><div className="section-kicker light-eyebrow">03 / OUR VISION</div><h2>To be the property development company <em>of choice.</em></h2><p>RPDC's stated mission is to develop and manage properties in order to create value for all stakeholders.</p><Link className="button button-outline-light" to="/about">Our company <ArrowUpRight size={16}/></Link></div></section>
  <section className="cta-band"><div className="container cta-inner"><div><div className="section-kicker">LET'S START A CONVERSATION</div><h2>Have land or a<br/>project in mind?</h2></div><Link className="round-cta" to="/contact"><ArrowUpRight size={30}/></Link><p>RPDC's published profile describes joint venture development partnerships with landowners. Contact the team to discuss your project.</p></div></section>
 </>
}
