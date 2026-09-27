'use client';

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=90";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-decor hero-flower">✿</div>
    <div className="hero-copy">
      <div className="eyebrow"><span className="live-dot"/> MAMMAMEYO · PREMIUM BAKERY</div>
      <div className="hero-script">Baked with love, served with warmth <Heart size={13}/></div>
      <h1 id="hero-title">Little moments,<br/><em>beautifully baked.</em></h1>
      <p className="hero-lede">From celebration cakes to flaky morning pastries, MamMameyo brings fresh, handcrafted sweetness to Bahria Town and beyond.</p>
      <div className="hero-actions"><Link href="/menu" className="primary-button">Explore the bakery <ArrowUpRight size={17}/></Link><Link href="/custom-cake" className="secondary-button">Create a custom cake</Link></div>
      <div className="hero-proof-row"><span><Sparkles size={14}/> Freshly baked</span><span className="proof-separator"/><span>Made for your moments</span></div>
    </div>
    <motion.div className="hero-stage" initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.8}}>
      <div className="hero-photo-wrap">
        <img src={HERO_IMAGE} alt="MamMameyo signature chocolate celebration cake" fetchPriority="high" onError={(e)=>e.currentTarget.src="/food-fallback.svg"}/>
        <div className="photo-caption"><span>SIGNATURE CAKE</span><b>Chocolate · 6 inch</b></div>
      </div>
      <div className="fresh-stamp"><span>MADE<br/>FRESH</span><small>DAILY</small></div>
      <div className="hero-note note-a">Hand finished <span>✦</span></div>
      <div className="hero-note note-b">Bahria Town <span>·</span> Rawalpindi</div>
    </motion.div>
  </section>;
}
