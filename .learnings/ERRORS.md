# Errors

Command failures and integration errors.

---

## 2026-04-05

### Weather API 404 — wrong OpenMeteo URL
- **Error**: `GET https://api.openmeteo.com/v1/forecast` returned HTML 404 page
- **Fix**: Changed to `https://api.open-meteo.com/v1/forecast`
- **Impact**: Weather widget showed "Failed" on all trip results pages

### LiteAPI Hotels 400 — missing required params
- **Error**: `{"error":{"code":4000,"description":"you must search by either country code, latitude and longitude..."}}`
- **Cause**: Using city name as only param; API requires lat+lon or IATA
- **Fix**: Added destination coordinates lookup table; use `latitude=X&longitude=Y`

### Trip Results Page showed mock/hardcoded data
- **Error**: User reported "data is not loading" on the live site
- **Root cause**: Plan page saved to localStorage but never called `/api/generate-itinerary`. Trip results page read localStorage but displayed generic "Dream Destination" instead of actual form data.
- **Fix**: Plan page now POSTs to AI API first, then saves result + formData to localStorage before navigating.
