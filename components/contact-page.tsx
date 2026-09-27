'use client';
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Clock3, Phone } from "lucide-react";
import { MobileNav, SiteHeader } from "./site-header";
import { useApp } from "./providers";

export function ContactPage(){
 const {toast}=useApp(); const [form,setForm]=useState({name:"",email:"",message:""});
 const submit=(e:React.FormEvent)=>{e.preventDefault(); if(!form.name||!form.email||!form.message){toast("Please complete the form","Name, email and message are required.","error");return;} toast("Message received","Thank you — MamMameyo will get back to you soon.");setForm({name:"",email:"",message:""});};
 return <main><SiteHeader/><div className="page-shell inner-page contact-page">
  <section className="contact-heading"><span className="section-kicker">GET IN TOUCH</span><h1>Let's talk<br/><em>sweet things.</em></h1><p>Questions about an order, a celebration cake or a gifting idea? We'd love to hear from you.</p></section>
  <div className="contact-grid"><form className="contact-form" onSubmit={submit}><label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Message<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us what you need..."/></label><button className="primary-button" type="submit">Send message <ArrowUpRight size={16}/></button></form>
  <div className="contact-info"><div><MapPin size={20}/><span><b>Visit the bakehouse</b>Bahria Town, Phase 2<br/>Rawalpindi, Pakistan<a href="https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+2+Rawalpindi+Pakistan" target="_blank" rel="noreferrer">Get directions ↗</a></span></div><div><Mail size={20}/><span><b>Email</b><a href="mailto:officialmamameyo@bakery.pk">officialmamameyo@bakery.pk</a></span></div><div><Phone size={20}/><span><b>Phone</b><span>Phone line can be configured here.</span></span></div><div><Clock3 size={20}/><span><b>Hours</b>Daily · fresh bakes in the morning<br/>Custom cake consultations by arrangement.</span></div></div></div>
 </div><MobileNav/></main>
}
