"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CakeSlice,
  Gift,
  Leaf,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { categories, offers, products } from "@/lib/data";
import { ProductCard } from "./product-card";
import Hero from "./hero";
import { AnnouncementBar, MobileNav, SiteHeader } from "./site-header";
import { useApp } from "./providers";

type PromiseItem = {
  icon: LucideIcon;
  title: string;
  sub: string;
};

const promises: PromiseItem[] = [
  {
    icon: Leaf,
    title: "Fresh every morning",
    sub: "Small-batch baking",
  },
  {
    icon: CakeSlice,
    title: "Made to celebrate",
    sub: "Cakes made for your story",
  },
  {
    icon: Gift,
    title: "Gift-ready",
    sub: "Beautifully packed",
  },
  {
    icon: MapPin,
    title: "Bahria Town",
    sub: "Rawalpindi · Pakistan",
  },
];

export function HomePage() {
  const { toast } = useApp();

  const featured = products
    .filter((product) => product.popular)
    .slice(0, 4);

  return (
    <main>
      <SiteHeader />
      <AnnouncementBar />

      <div className="page-shell">
        <Hero />

        {/* PROMISE STRIP */}
        <section className="promise-strip">
          {promises.map(({ icon: Icon, title, sub }) => (
            <div key={title}>
              <Icon size={20} />

              <div>
                <b>{title}</b>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </section>

        {/* CATEGORIES */}
        <section className="section" id="categories">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / THE BAKERY</span>

              <h2>Something lovely for every craving.</h2>
            </div>

            <Link href="/menu">
              View all
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/menu?category=${category.id}`}
                className="category-card"
                style={
                  {
                    "--cat-accent": category.accent,
                  } as React.CSSProperties
                }
              >
                <span className="category-number">
                  0{index + 1}
                </span>

                <span className="category-icon">
                  {category.icon}
                </span>

                <div>
                  <h3>{category.name}</h3>
                  <p>{category.note}</p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="category-arrow"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* EDITORIAL */}
        <section className="editorial-section">
          <div className="editorial-image">
            <img
              src={products[2]?.image}
              alt="Vanilla berry celebration cake"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = "/food-fallback.svg";
              }}
            />

            <span>
              MADE FOR
              <br />
              GOOD DAYS
            </span>
          </div>

          <div className="editorial-copy">
            <span className="section-kicker">
              02 / OUR WAY OF BAKING
            </span>

            <h2>
              Warm ovens.
              <br />
              <em>Beautiful details.</em>
            </h2>

            <p>
              We believe the best bakery moments are the ones that
              feel personal. Every sponge, pastry and little treat is
              prepared with carefully chosen ingredients, thoughtful
              finishing and the kind of warmth you can taste.
            </p>

            <Link href="/about" className="text-link">
              Discover our story
              <ArrowRight size={15} />
            </Link>

            <div className="editorial-sign">
              <span>MM</span>

              <small>
                BAKED IN
                <br />
                RAWALPINDI
              </small>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="section featured-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                03 / CUSTOMER FAVOURITES
              </span>

              <h2>The ones worth coming back for.</h2>
            </div>

            <Link href="/menu">
              Shop the collection
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* CUSTOM CAKE */}
        <section className="custom-banner">
          <div>
            <span className="section-kicker">
              04 / YOUR CAKE, YOUR STORY
            </span>

            <h2>
              Dream it.
              <br />
              <em>We&apos;ll bake it.</em>
            </h2>

            <p>
              Birthdays, weddings, anniversaries, baby showers or
              a just-because celebration — tell us what you have
              in mind.
            </p>

            <Link
              href="/custom-cake"
              className="primary-button"
            >
              Start a custom cake
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="custom-ornament">
            <div>✿</div>

            <span>
              PERSONAL
              <br />
              DETAILS
              <br />
              MATTER
            </span>
          </div>
        </section>

        {/* OFFERS */}
        <section className="section offers-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                05 / LITTLE EXTRAS
              </span>

              <h2>Made for gifting &amp; gathering.</h2>
            </div>

            <span className="section-side-note">
              Simple offers, thoughtfully presented.
            </span>
          </div>

          <div className="offer-grid">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.code}
                className={`offer-card offer-${index + 1}`}
                whileHover={{ y: -5 }}
              >
                <div className="offer-top">
                  <span>{offer.label}</span>

                  <b>
                    0{index + 1}
                  </b>
                </div>

                <h3>{offer.title}</h3>

                <p>{offer.sub}</p>

                <div className="offer-bottom">
                  <code>{offer.code}</code>

                  <button
                    type="button"
                    onClick={() =>
                      toast(
                        "Offer saved",
                        `${offer.code} is ready for checkout.`,
                        "info"
                      )
                    }
                  >
                    Save offer
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="section location-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                06 / COME SAY HELLO
              </span>

              <h2>Fresh from our kitchen.</h2>
            </div>

            <span className="section-side-note">
              Bahria Town, Phase 2
            </span>
          </div>

          <div className="location-panel">
            <div className="location-copy">
              <span className="location-pin">
                <MapPin size={21} />
              </span>

              <span className="section-kicker">
                MAMMAMEYO BAKEHOUSE
              </span>

              <h3>
                Bahria Town, Phase 2
                <br />
                Rawalpindi, Pakistan
              </h3>

              <p>
                Drop in for something fresh, or order online and let
                us bring the bakery to you.
              </p>

              <div className="location-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+2+Rawalpindi+Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Get directions
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="mailto:officialmamameyo@bakery.pk"
                  className="secondary-button"
                >
                  Email us
                </a>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                title="MamMameyo location map"
                src="https://www.google.com/maps?q=Bahria+Town+Phase+2+Rawalpindi+Pakistan&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="instagram-band">
          <div>
            <span className="section-kicker">
              07 / FOLLOW ALONG
            </span>

            <h2>
              Little treats,{" "}
              <em>beautifully shared.</em>
            </h2>
          </div>


        </section>
      </div>

      <Footer />

      <MobileNav />
    </main>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <LogoFooter />

          <p>
            A premium bakery for fresh bakes, celebration cakes,
            thoughtful gifts and everyday sweet moments.
          </p>

          <span className="footer-location">
            <MapPin size={14} />
            Bahria Town, Phase 2 · Rawalpindi
          </span>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <b>Explore</b>

          <Link href="/menu">
            Shop
          </Link>

          <Link href="/menu?category=cakes">
            Cakes
          </Link>

          <Link href="/menu?category=pastries">
            Pastries
          </Link>

          <Link href="/menu?category=desserts">
            Desserts
          </Link>
        </div>

        {/* MADE FOR YOU */}
        <div className="footer-col">
          <b>Made for you</b>

          <Link href="/custom-cake">
            Custom Cakes
          </Link>

          <Link href="/about">
            Our Story
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/orders">
            Order History
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <b>Contact</b>

          <a href="mailto:officialmamameyo@bakery.pk">
            officialmamameyo@bakery.pk
          </a>

          <span>
            Rawalpindi, Pakistan
          </span>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+2+Rawalpindi+Pakistan"
            target="_blank"
            rel="noreferrer"
          >
            Get directions ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} MamMameyo
        </span>

        <span>
          Premium Bakery &amp; Desserts · Baked with care
        </span>

        <span>
          Privacy · Terms · Delivery
        </span>
      </div>
    </footer>
  );
}

function LogoFooter() {
  return (
    <Link
      href="/"
      className="footer-logo"
      aria-label="MamMameyo home"
    >
      <img
        src="/logo.svg"
        alt="MamMameyo"
        width={170}
        height={45}
      />
    </Link>
  );
}