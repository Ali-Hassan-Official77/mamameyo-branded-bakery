'use client';

import Link from "next/link";
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Moon,
  Sun,
  Heart,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useApp } from "./providers";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="MamMameyo home">
      <img src="/logo.svg" alt="MamMameyo" width="156" height="41" />
    </Link>
  );
}

export function SiteHeader() {
  const { cartCount, favorites, dark, toggleDark } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/menu">Shop</Link>

          <div className="nav-dropdown">
            <span>
              Cakes <ChevronDown size={12} />
            </span>

            <div>
              <Link href="/menu?category=cakes">
                Celebration Cakes
              </Link>
              <Link href="/custom-cake">
                Custom Cakes
              </Link>
            </div>
          </div>

          <Link href="/menu?category=pastries">
            Pastries
          </Link>

          <Link href="/menu?category=desserts">
            Desserts
          </Link>

          <Link href="/about">
            Our Story
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          {/* Search - Desktop + Mobile */}
          <Link
            href="/menu"
            className="header-icon"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>

          {/* Favourites - Desktop only */}
          <Link
            href="/account"
            className="header-icon header-fav desktop-only"
            aria-label="Favourites"
          >
            <Heart size={18} />
            {favorites.length > 0 && <b>{favorites.length}</b>}
          </Link>

          {/* Account - Desktop only */}
          <Link
            href="/account"
            className="header-icon desktop-user desktop-only"
            aria-label="Account"
          >
            <UserRound size={18} />
          </Link>

          {/* Theme - Desktop + Mobile */}
          <button
            className="header-icon theme-button"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            type="button"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Basket - Desktop only */}
          <Link
            href="/cart"
            className="header-cart desktop-only"
          >
            <ShoppingBag size={17} />
            <span>Basket</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            type="button"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">

          <Link href="/" onClick={() => setOpen(false)}>
            Home <span>01</span>
          </Link>

          <Link href="/menu" onClick={() => setOpen(false)}>
            Shop <span>02</span>
          </Link>

          <Link
            href="/menu?category=cakes"
            onClick={() => setOpen(false)}
          >
            Cakes <span>03</span>
          </Link>

          <Link
            href="/menu?category=pastries"
            onClick={() => setOpen(false)}
          >
            Pastries <span>04</span>
          </Link>

          <Link
            href="/custom-cake"
            onClick={() => setOpen(false)}
          >
            Custom Cakes <span>05</span>
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
          >
            Our Story <span>06</span>
          </Link>

          <Link
            href="/account"
            onClick={() => setOpen(false)}
          >
            Account <span>07</span>
          </Link>

          <button
            onClick={() => {
              toggleDark();
              setOpen(false);
            }}
            type="button"
          >
            {dark ? "Switch to light" : "Switch to dark"}
            <span>◐</span>
          </button>

        </div>
      )}
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <span>✦ Baked fresh in Bahria Town, Rawalpindi</span>
      <span className="announcement-right">
        Celebrations · gifting · everyday cravings
      </span>
    </div>
  );
}

export function MobileNav() {
  const { cartCount } = useApp();

  return (
    <nav
      className="mobile-nav"
      aria-label="Mobile navigation"
    >
      <Link href="/">
        <span>⌂</span>
        Home
      </Link>

      <Link href="/menu">
        <span>✦</span>
        Shop
      </Link>

      <Link
        href="/cart"
        className="mobile-cart"
      >
        <span>
          <ShoppingBag size={19} />
          {cartCount > 0 && <b>{cartCount}</b>}
        </span>
        Basket
      </Link>

      <Link href="/custom-cake">
        <span>♡</span>
        Custom
      </Link>

      <Link href="/account">
        <span>◉</span>
        Account
      </Link>
    </nav>
  );
}