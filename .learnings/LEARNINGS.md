# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice

---

## 2026-04-05

### OpenMeteo API URL is `api.open-meteo.com` NOT `api.openmeteo.com`
- **Category**: knowledge_gap
- **Detail**: The correct base URL for OpenMeteo weather API v1 is `https://api.open-meteo.com`. The old URL (`api.openmeteo.com`) returns a 404 HTML page, causing weather failures. Also note parameter names changed: `weathercode` → `weather_code`.

### LiteAPI.travel uses `api.liteapi.travel` as base URL
- **Category**: knowledge_gap  
- **Detail**: The docs say "liteapi.travel" but the actual API endpoint is `api.liteapi.travel`. Hotels endpoint requires latitude+longitude (or IATA code) — city name alone returns 400 error. Auth via `X-API-Key` header.

### Ollama Cloud API works with Bearer token
- **Category**: best_practice
- **Detail**: Endpoint: `POST https://ollama.com/api/chat`, Headers: `Authorization: Bearer <key>`, Body: `{ model: "minimax-m2.7:cloud", messages: [...], stream: false }`. Response has `message.content` field. Works reliably (~3s response).

### Always wire up form submissions to real APIs before shipping
- **Category**: correction
- **Detail**: The initial build had beautiful UI but zero functionality — forms didn't call APIs, results showed mock data. User explicitly asked for "fully functional." Lesson: interactivity > visuals when building MVP.
