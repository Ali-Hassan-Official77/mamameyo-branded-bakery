'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CakeSlice, CheckCircle2, Sparkles } from "lucide-react";
import { MobileNav, SiteHeader } from "./site-header";
import { useApp } from "./providers";

export function CustomCakePage(){
 const {toast}=useApp();
 const [form,setForm]=useState({occasion:"Birthday",flavour:"Chocolate",size:"6 inch",date:"",theme:"",message:"",name:"",phone:""});
 const update=(key:string,value:string)=>setForm({...form,[key]:value});
 function submit(e:React.FormEvent){e.preventDefault(); if(!form.name||!form.phone){toast("A little more detail","Please add your name and phone number.","error");return;} toast("Custom cake request received","We'll contact you to confirm the design and quotation.");}
 return <main><SiteHeader/><div className="page-shell inner-page custom-page">
   <Link href="/" className="back-link"><ArrowLeft size={16}/> Home</Link>
   <section className="custom-hero"><div><span className="section-kicker">THE CUSTOM CAKE DESK</span><h1>Your celebration,<br/><em>your cake.</em></h1><p>Share the idea, mood or memory you want to celebrate. Our team will shape it into a beautiful cake made especially for you.</p><div className="custom-perks"><span><Sparkles size={15}/> Hand-finished</span><span><CakeSlice size={15}/> Made to order</span><span>♡ Personal details</span></div></div><div className="custom-art"><div className="cake-circle"><CakeSlice size={46}/><span>MADE<br/>FOR<br/>YOU</span></div></div></section>
   <form className="custom-form" onSubmit={submit}><div className="form-card"><div className="card-title"><span>01</span><div><h2>Tell us about the celebration</h2><p>We'll use these details to understand the direction.</p></div></div><div className="form-grid"><label>Occasion<select value={form.occasion} onChange={e=>update("occasion",e.target.value)}><option>Birthday</option><option>Wedding</option><option>Anniversary</option><option>Engagement</option><option>Baby shower</option><option>Corporate event</option><option>Other celebration</option></select></label><label>Preferred flavour<select value={form.flavour} onChange={e=>update("flavour",e.target.value)}><option>Chocolate</option><option>Vanilla</option><option>Red Velvet</option><option>Coffee</option><option>Fresh Cream</option><option>Surprise me</option></select></label><label>Size<select value={form.size} onChange={e=>update("size",e.target.value)}><option>6 inch</option><option>8 inch</option><option>10 inch</option><option>Custom size</option></select></label><label>Preferred date<input type="date" value={form.date} onChange={e=>update("date",e.target.value)}/></label><label className="full">Theme / design idea<input value={form.theme} onChange={e=>update("theme",e.target.value)} placeholder="Elegant florals, minimal gold, cartoon theme..."/></label><label className="full">Message on cake<textarea value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Happy Birthday, Areeba!"/></label></div></div>
   <div className="form-card"><div className="card-title"><span>02</span><div><h2>How can we reach you?</h2><p>We'll contact you with availability and a final quote.</p></div></div><div className="form-grid"><label>Full name<input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Your name"/></label><label>Phone number<input required value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="03xx xxxxxxx"/></label></div><div className="custom-submit"><div><CheckCircle2 size={18}/><span>Reference image upload can be connected to your storage/backend later.</span></div><button className="primary-button" type="submit">Send cake request <ArrowRight size={16}/></button></div></div></form>
 </div><MobileNav/></main>
}
