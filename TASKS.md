# TASKS.md — TripBuilder Active Tasks

> **NOTE:** For live status, see `AGENT_STATUS_TRACKER.md` — it has real-time progress updated every ~10 min.

## 🚨 TOP PRIORITY (Right Now)
- [ ] Rewrite `/trip/[id]/page.tsx` — currently shows raw JSON, needs full dashboard UI

## ✅ DONE
- [x] GitHub repo + Vercel project setup
- [x] Landing page (hero, destinations, features, CTA)
- [x] Plan trip 3-step form → calls Ollama AI
- [x] Trip results shell (localStorage data reading)
- [x] API routes: generate-itinerary, weather, hotels, places, currency, save-trip
- [x] Destinations page
- [x] About page
- [x] Loading/error/404 pages
- [x] Mobile navbar
- [x] Landing page search → /plan with params

## 📋 PHASE 1 COMPLETE (Core MVP)
- [x] Landing page
- [x] Plan trip form
- [x] Trip results page (needs better UI — pending)
- [x] AI itinerary generation (Ollama)
- [x] Weather data
- [x] Hotel recommendations
- [x] Mobile responsive

## 📋 PHASE 2 (Next)
- [ ] SEO — sitemap, robots.txt, Schema.org JSON-LD
- [ ] User auth with Supabase
- [ ] Save trips to database
- [ ] Destination detail pages
- [ ] Real flight search UI
- [ ] Share trip functionality

## 📋 PHASE 3 (Later)
- [ ] Affiliate links (flights, hotels)
- [ ] Programmatic SEO content (1000s of destination pages)
- [ ] Email capture + nurture
- [ ] Analytics setup
