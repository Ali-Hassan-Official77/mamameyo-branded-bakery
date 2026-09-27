'use client';

import Link from "next/link";
import { ArrowLeft, Search, SlidersHorizontal, X, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { MobileNav, SiteHeader } from "./site-header";

export function MenuPage({ initialCategory = "all" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory || "all");
  const [sort, setSort] = useState("popular");
  const list = useMemo(() => {
    let result = products.filter(p => category === "all" || p.category === category)
      .filter(p => `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "low") result = [...result].sort((a,b)=>a.price-b.price);
    if (sort === "high") result = [...result].sort((a,b)=>b.price-a.price);
    if (sort === "rating") result = [...result].sort((a,b)=>b.rating-a.rating);
    if (sort === "popular") result = [...result].sort((a,b)=>Number(b.popular)-Number(a.popular));
    return result;
  }, [query, category, sort]);

  return <main><SiteHeader/><div className="page-shell inner-page">
    <div className="page-title"><Link href="/" className="back-link"><ArrowLeft size={16}/> Home</Link><span className="section-kicker">THE MAMMAMEYO COLLECTION</span><h1>Good things, baked daily.</h1><p>From celebration cakes and delicate pastries to little treats for ordinary days, choose something made with care.</p></div>
    <div className="catalog-toolbar"><div className="search-field"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search cakes, brownies, croissants..."/>{query && <button onClick={()=>setQuery("")}><X size={15}/></button>}</div><div className="sort-field"><SlidersHorizontal size={15}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">Featured</option><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div>
    <div className="filter-row"><button className={category==="all"?"active":""} onClick={()=>setCategory("all")}>Everything</button>{categories.map(c=><button key={c.id} className={category===c.id?"active":""} onClick={()=>setCategory(c.id)}>{c.name}</button>)}</div>
    <div className="catalog-meta"><span>{list.length} treats</span><span>Fresh collection · PKR</span></div>
    {list.length ? <div className="product-grid">{list.map(p=><ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><div className="empty-symbol"><Search size={38}/></div><h2>Nothing matched that search.</h2><p>Try another name or browse the full collection.</p><button className="secondary-button" onClick={()=>{setQuery("");setCategory("all")}}>Reset filters</button></div>}
    <section className="menu-note"><div><span className="section-kicker">NEED SOMETHING CUSTOM?</span><h2>Have a cake in mind?</h2><p>Tell us the occasion, flavour and style. We'll turn the idea into a celebration.</p></div><Link href="/custom-cake" className="primary-button">Create a custom cake <ArrowUpRight size={15}/></Link></section>
  </div><MobileNav/></main>;
}
