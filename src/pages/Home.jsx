import React from "react";
import {Link} from "react-router-dom";
import {ArrowDown,ArrowUpRight} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import {projects} from "../data";
export default function Home(){
 return <>
  <section className="hero">
   <img className="hero-image" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=90" alt="Contemporary architectural building"/>
   <div className="hero-shade"/>
   <div className="container hero-content"><div className="eyebrow light-eyebrow"><span/> REAL ESTATE & DEVELOPMENT</div><h1>Shaping spaces.<br/><em>Building value.</em></h1><p>We develop purposeful places that bring people, businesses and communities closer to what matters.</p><div className="hero-actions"><Link className="button button-light" to="/developments">Explore our developments <ArrowUpRight size={17}/></Link><Link className="button button-ghost" to="/about">Discover RPDC</Link></div></div>
   <div className="hero-bottom container"><span>01 — BUILT AROUND POSSIBILITY</span><span className="scroll-hint"><ArrowDown size={15}/> SCROLL TO EXPLORE</span></div>
  </section>
  <section className="intro-section section-pad"><div className="container intro-grid"><div className="section-kicker">01 / WHO WE ARE</div><div><p className="display-copy">We see real estate as more than property. It is the foundation for <span>enterprise, connection and lasting progress.</span></p><div className="intro-foot"><p>RPDC Limited is a Lagos-based real estate and development firm working across commercial and residential opportunities, project development and strategic partnerships.</p><Link className="text-link" to="/about">Get to know RPDC <ArrowUpRight size={16}/></Link></div></div></div></section>
  <section className="projects-section section-pad"><div className="container"><div className="section-heading"><div><div className="section-kicker">02 / SELECTED DEVELOPMENTS</div><h2>Places with<br/><em>purpose.</em></h2></div><Link className="text-link" to="/developments">View all developments <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div></section>
  <section className="statement-section"><div className="statement-image"><img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85" alt="Architecture"/></div><div className="statement-copy"><div className="section-kicker light-eyebrow">03 / OUR APPROACH</div><h2>Development<br/>with <em>intention.</em></h2><p>From early planning and feasibility to delivery and market engagement, we bring a considered approach to the spaces we help create.</p><Link className="button button-outline-light" to="/about">Our approach <ArrowUpRight size={16}/></Link></div></section>
  <section className="cta-band"><div className="container cta-inner"><div><div className="section-kicker">LET'S BUILD WHAT'S NEXT</div><h2>Have a project<br/>in mind?</h2></div><Link className="round-cta" to="/contact"><ArrowUpRight size={30}/></Link><p>For development partnerships, property enquiries and new opportunities, start a conversation with our team.</p></div></section>
 </>
}