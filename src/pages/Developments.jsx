import React,{useState} from "react";
import {projects} from "../data";
import ProjectCard from "../components/ProjectCard";
export default function Developments(){
 const [filter,setFilter]=useState("All");
 const shown=filter==="All"?projects:projects.filter(p=>p.category===filter);
 return <><section className="page-hero"><div className="container"><div className="section-kicker">OUR PORTFOLIO / 01</div><h1>Developments<br/><em>in focus.</em></h1><p>Explore the places and projects shaping our development journey.</p></div></section><section className="section-pad"><div className="container"><div className="filter-row"><span>Showing {shown.length} featured projects</span><div>{["All","Residential","Commercial"].map(f=><button className={filter===f?"filter active":"filter"} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div><div className="project-grid">{shown.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div><p className="disclaimer">Project descriptions are illustrative summaries based on publicly available information. Current status, pricing, availability and specifications must be confirmed by RPDC.</p></div></section></>
}