import React from "react";
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";
export default function ProjectCard({project,index=0}){
 return <article className="project-card">
  <Link to={`/developments/${project.slug}`} className="project-image"><img src={project.image} alt="" loading="lazy"/><span className="image-index">0{index+1}</span><span className="image-arrow"><ArrowUpRight/></span></Link>
  <div className="project-meta"><span>{project.category}</span><span>{project.location}</span></div>
  <h3><Link to={`/developments/${project.slug}`}>{project.name}</Link></h3>
  <p>{project.short}</p>
  <Link className="text-link" to={`/developments/${project.slug}`}>Explore project <ArrowUpRight size={16}/></Link>
 </article>
}