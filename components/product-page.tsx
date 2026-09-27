'use client';

import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, Minus, Plus, ShieldCheck, Star, Truck, CakeSlice } from "lucide-react";
import { useState } from "react";
import { findProduct, products } from "@/lib/data";
import { useApp } from "./providers";
import { MobileNav, SiteHeader } from "./site-header";
import { ProductCard } from "./product-card";

export function ProductPage({ slug }: { slug: string }) {
  const product = findProduct(slug);
  const { addToCart, favorites, toggleFavorite } = useApp();
  const [quantity,setQuantity]=useState(1);
  const [size,setSize]=useState("Regular");
  const [flavour,setFlavour]=useState("Signature");
  const [note,setNote]=useState("");
  if (!product) return <main><SiteHeader/><div className="page-shell inner-page"><div className="empty-state"><h1>Treat not found.</h1><Link href="/menu" className="primary-button">Back to collection</Link></div></div></main>;
  const liked=favorites.includes(product.id);
  const related=products.filter(p=>p.id!==product.id&&p.category===product.category).slice(0,4);

  function addCustomized(){
    for(let i=0;i<quantity;i++) addToCart(product);
  }

  return <main><SiteHeader/><div className="page-shell inner-page product-detail-page"><Link href="/menu" className="back-link"><ArrowLeft size={16}/> Back to collection</Link>
    <div className="detail-layout">
      <div className="detail-visual"><img src={product.image} alt={product.name} onError={e=>e.currentTarget.src="/food-fallback.svg"}/><span>{product.badge||"MAMMAMEYO"}</span></div>
      <div className="detail-copy"><div className="product-rating"><Star size={14} fill="currentColor"/><b>{product.rating}</b><span>({product.reviews} reviews)</span></div><span className="section-kicker">{product.category.toUpperCase()} · MAMMAMEYO BAKESHOP</span><h1>{product.name}</h1><p className="detail-description">{product.description}</p>
      <div className="detail-price">Rs. {product.price.toLocaleString()} <small>per item</small></div>

      {product.category === "cakes" && <div className="option-box"><label>Size<select value={size} onChange={e=>setSize(e.target.value)}><option>Regular</option><option>6 inch</option><option>8 inch</option><option>10 inch</option></select></label><label>Flavour<select value={flavour} onChange={e=>setFlavour(e.target.value)}><option>Signature</option><option>Chocolate</option><option>Vanilla</option><option>Red Velvet</option></select></label><label className="full">Cake message <input value={note} onChange={e=>setNote(e.target.value)} placeholder="Happy Birthday, Sara!"/></label></div>}

      <div className="detail-actions"><div className="quantity"><button onClick={()=>setQuantity(Math.max(1,quantity-1))}><Minus size={15}/></button><b>{quantity}</b><button onClick={()=>setQuantity(quantity+1)}><Plus size={15}/></button></div><button className="primary-button detail-add" onClick={addCustomized}>Add to basket <ArrowRight size={16}/></button><button className={`detail-heart ${liked?"liked":""}`} onClick={()=>toggleFavorite(product.id)} aria-label="Toggle favourite"><Heart size={20} fill={liked?"currentColor":"none"}/></button></div>
      <div className="detail-assurance"><div><ShieldCheck size={17}/><span><b>Carefully packed</b><small>Prepared with attention to detail</small></span></div><div><Truck size={17}/><span><b>Fresh dispatch</b><small>Local delivery around Rawalpindi</small></span></div></div>
      <div className="ingredient-box"><span className="section-kicker">WHAT'S INSIDE</span><div>{product.ingredients.map(x=><span key={x}>{x}</span>)}</div></div>
      <div className="detail-custom-note"><CakeSlice size={18}/><span><b>Need something personal?</b> <Link href="/custom-cake">Request a custom cake →</Link></span></div>
      </div>
    </div>
    {related.length>0&&<section className="related-section"><div className="section-heading"><div><span className="section-kicker">MORE FROM THIS COLLECTION</span><h2>You may also like.</h2></div></div><div className="product-grid">{related.map(p=><ProductCard key={p.id} product={p} compact/>)}</div></section>}
  </div><MobileNav/></main>;
}
