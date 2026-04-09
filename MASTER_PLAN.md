# MASTER_PLAN.md — TripBuilder Vacation Planner

## Vision

**TripBuilder** is an AI-powered vacation planning SaaS that creates complete vacation plans in minutes — from flights and hotels to day-by-day itineraries, budgets, weather forecasts, and packing lists.

**Mission**: Make travel planning effortless and accessible to everyone.

**Goal**: Become the go-to platform for AI-generated travel itineraries, competing with TripAdvisor and Expedia by offering a superior, personalized planning experience.

---

## Target Audience

- **Primary**: Solo travelers, couples, and small families (25-45 age)
- **Secondary**: Digital nomads, adventure seekers, budget-conscious travelers
- **Behavior**: Research online, want quick results, value personalization

---

## Website Structure

### 1. Homepage (`/`)
- **Hero Section**: Full-width search form
  - From: Google Places autocomplete (any city/airport)
  - To: Google Places autocomplete (any destination)
  - Trip Type: Round Trip / One Way / Multi-City
  - Dates: Start & End date pickers
  - Travelers: Dropdown (1-4 adults, children)
  - Budget: Slider with currency selector (USD, EUR, GBP, INR, JPY, AUD)
  - **Submit**: Generates itinerary inline with loading animation
  
- **Popular Destinations**: Grid of 8 destination cards
  - Image + Name + Country + Price + Rating
  - Click to auto-fill destination

- **How It Works**: 3-step visual explanation
  1. Tell us your trip → 2. AI creates plan → 3. Travel & enjoy

- **Why Choose Us**: 4-column feature grid
  - AI-Powered | Best Prices | 24/7 Support | Free Changes

- **CTA Section**: "Plan Your Trip Now — It's Free"

- **Footer**: Links (About, Destinations, Plan), Copyright

### 2. Results Section (Inline on Homepage)
- **Loading State**: Animated progress with status messages
  - "Analyzing destination..."
  - "Finding flights..."
  - "Searching hotels..."
  - "Building your itinerary..."
  
- **Trip Summary Card**:
  - Destination image + name
  - Dates & duration
  - Total estimated cost
  
- **Day-by-Day Itinerary**:
  - Accordion for each day
  - Morning/Afternoon/Evening activities
  - Activity type icons
  - Estimated costs per activity
  
- **Weather Widget**:
  - Forecast for trip dates
  - Temperature, conditions, what to pack
  
- **Budget Breakdown**:
  - Flights | Hotels | Activities | Food | Miscellaneous
  - Pie chart visualization
  
- **Packing List**:
  - Essentials based on destination & weather
  - Checklist format

### 3. Destinations Page (`/destinations`)
- SEO-optimized destination listing
- Search/filter by region, price, rating
- Individual destination pages (future phase)

### 4. About Page (`/about`)
- Mission statement
- Team info (placeholder)
- Contact

---

## Content Plan

### Homepage Content
```
Hero Headline: "Plan Your Perfect Trip"
Hero Subheadline: "From flight to itinerary — we build your complete vacation in minutes"

Popular Destinations:
- Paris, France ($1,200, 4.8★)
- Bali, Indonesia ($800, 4.9★)
- Tokyo, Japan ($1,500, 4.9★)
- New York, USA ($1,400, 4.7★)
- Maldives ($2,500, 4.9★)
- Dubai ($1,300, 4.8★)
- Rome, Italy ($1,100, 4.8★)
- Barcelona, Spain ($1,000, 4.7★)

How It Works:
1. "Tell Us Your Trip" — Enter departure, destination, dates, budget. Customize by interests and travel pace.
2. "AI Creates Your Plan" — Generate complete day-by-day itinerary with flights, hotels, activities, budget breakdown.
3. "Travel & Enjoy" — Get packing tips, weather forecasts, and travel recommendations.

Why Choose Us:
- AI-Powered: "Personalized itineraries generated in seconds"
- Best Prices: "We scan hundreds of sources for the best deals"
- 24/7 Support: "Our travel experts are always here to help"
- Free Changes: "Plans change. We offer flexible options."

CTA: "Ready to Start Your Adventure? Join thousands of travelers who have planned their perfect trips."
```

### SEO Strategy
- **Keywords**: "AI trip planner", "vacation itinerary generator", "best places to travel 2026", "travel budget calculator"
- **Schema.org**: Organization, WebSite, FAQPage, BreadcrumbList
- **Meta tags**: Unique title/description per page
- **Internal linking**: Home → Destinations → Individual destination pages
- **Performance**: <3s load time, lazy-loaded images, optimized JS

---

## API Integrations

| API | Purpose | Status |
|-----|---------|--------|
| Ollama (minimax-m2.7:cloud) | AI itinerary generation | ✅ Working |
| Google Places API | Autocomplete for From/To | ✅ Key available |
| Open-Meteo | Weather forecasts | ✅ Working |
| LiteAPI.travel | Hotel search | ✅ Key available |
| Open Exchange Rates | Currency conversion | ✅ Working |

---

## Future Phases

### Phase 2: Itinerary Optimization
- Improve AI prompts for better itineraries
- Add activity photos and descriptions
- Allow editing/rescheduling activities

### Phase 3: Flight Search
- Integrate LiteAPI for real flight prices
- Show multiple airline options
- Sort by price/duration/stops

### Phase 4: Hotel Booking
- Integrated hotel search and booking
- Show photos, amenities, reviews
- "Book Now" links to booking partners

### Phase 5: SEO Content
- Individual destination pages with SEO content
- Blog section with travel guides
- Programmatic SEO for 500+ destinations

### Phase 6: User Accounts
- Save trips to account
- Share itineraries
- Re-use past trips

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Version Control**: GitHub
- **AI**: Ollama (minimax-m2.7:cloud)

---

## Success Metrics

- **Traffic**: 10K monthly visitors (Month 1)
- **Conversion**: 5% trip generation rate
- **Engagement**: Average 3+ min on site
- **SEO**: Rank top 20 for "AI trip planner"

---

## Last Updated
2026-04-09