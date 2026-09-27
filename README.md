# MamMameyo — Premium Bakery & Desserts

A production-style Next.js bakery storefront for **MamMameyo**, Bahria Town Phase 2, Rawalpindi.

## Technical base

This project was rebuilt from the supplied Hasmi Sweets project after inspecting its:
- Next.js App Router structure
- React + TypeScript setup
- `lucide-react`, `motion` and `zod`
- product data model
- client cart/favourites/order state
- product detail routing
- server-side order validation in `/api/orders`
- checkout and order-history flow

The backend/order architecture was adapted rather than visually copied.

## Brand direction

Warm editorial bakery styling inspired by the supplied reference image:
- parchment / cream surfaces
- terracotta bakery accent
- olive botanical details
- serif editorial typography
- generous spacing
- hand-crafted decorative marks
- responsive product cards
- premium, restrained motion

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm start
```

## Current ordering

Checkout supports Cash on Delivery. Prices and totals are validated on the server. A real payment gateway/database can be connected later without changing the storefront architecture.

## Business

**MamMameyo**  
Premium Bakery & Desserts  
Bahria Town, Phase 2, Rawalpindi, Pakistan  
officialmamameyo@bakery.pk
