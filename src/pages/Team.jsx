import React from "react";
import {leadership} from "../data";
const staff=[
 {name:"Engr. Olanrewaju Samuel",role:"Managing Director / Chief Executive Officer",bio:"RPDC's published profile describes more than two decades of experience across civil construction engineering, real estate, telecommunications and oil and gas infrastructure."},
 {name:"Oluseye Talabi",role:"General Manager",bio:"The company profile describes extensive experience in physical project management, estate development, project delivery and facilities management."}
];
export default function Team(){
 return <><section className="page-hero"><div className="container"><div className="section-kicker">THE PEOPLE BEHIND THE WORK</div><h1>Leadership &<br/><em>experience.</em></h1><p>Meet the board and management profiles presented on RPDC's published website.</p></div></section>
 <section className="section-pad"><div className="container"><div className="section-heading"><div><div className="section-kicker">BOARD OF DIRECTORS</div><h2>Guided by<br/><em>experience.</em></h2></div></div><div className="leadership-grid">{leadership.slice(0,4).map(person=><article className="leader-card" key={person.name}><div className="leader-photo"><img src={person.image} alt={person.name} loading="lazy"/></div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div></div></section>
 <section className="values-section"><div className="container"><div className="section-kicker light-eyebrow">MANAGEMENT</div><h2>People moving<br/><em>projects forward.</em></h2><div className="management-grid">{staff.map(person=><article key={person.name}><span>{person.role}</span><h3>{person.name}</h3><p>{person.bio}</p></article>)}</div><p className="small-note">Team names, roles and biographies are transcribed or summarised from the downloaded RPDC website. Confirm current appointments and approved biographies before publication.</p></div></section></>
}