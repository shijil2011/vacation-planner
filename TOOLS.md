# TOOLS.md - Credentials & APIs

## 🔑 All Credentials Here

### Ollama (AI Generation)
- **API Key:** fb0a596e81fe4fd9a75d199bfa2ea039.RCwPs8olrk2RRO7OBUvlwv2V
- **Model:** ollama/minimax-m2.7:cloud
- **Endpoint:** https://ollama.com/api (cloud Ollama)
- **Local Fallback:** Also available on VPS at localhost:11434

### Google Cloud / Places API
- **API Key:** AIzaSyDzDOtBiN1e2gVUrI22hpPL4De3mVVW6aE
- **Enabled APIs:** Places API, Maps JavaScript API (need to enable Directions API too)

### LiteAPI.travel (Flights & Hotels)
- **Docs:** https://docs.liteapi.travel/
- **Private API Key:** prod_851c1863-5c9a-472a-91c0-a04d5ed73e89
- **Usage:** Flight search, hotel booking search

### Supabase (Database & Auth)
- **Project URL:** https://eawzpyzahyoawztpuxln.supabase.co
- **Publishable Key:** sb_publishable_T6gcibftd06MAJDgSEZ7jw_spWcMw2-
- **Usage:** Save trips, user favorites, trip data persistence

### DataForSEO
- **Login:** shijil@leadmetrics.ai
- **Password:** 42d35481edc92bca
- **Monthly Budget:** $10
- **Usage:** SERP data, keyword research, rank tracking

### Tavily Search
- **API Key:** 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

### Vercel
- **Token:** vcp_REDACTED_TOKEN_1234567890
- **Team ID:** team_rHdlPjuQaJIA8cDHDWaYTi5F
- **Project:** vacation-planner (already created)

### GitHub
- **User:** shijil2011
- **Repo:** shijil2011/vacation-planner (already created)
- **Token:** Available via `gh auth status`

### Server Information
- **VPS IP:** 193.46.243.16
- **Specs:** AMD EPYC, 48GB RAM
- **Workspace:** /root/.openclaw/workspace-vacation-planner/
- **Ollama Local:** Available at localhost:11434 (models: glm-4.7-flash, qwen3.5)

## Free APIs (No Key Needed)
- **Weather:** OpenMeteo — https://api.openmeteo.com
- **Currency:** Open Exchange Rates — https://open.er-api.com/v6/latest/USD
- **Country Info:** REST Countries — https://restcountries.com

## Environment Variables Needed
```
NEXT_PUBLIC_OLLAMA_API_KEY=fb0a596e81fe4fd9a75d199bfa2ea039.RCwPs8olrk2RRO7OBUvlwv2V
NEXT_PUBLIC_OLLAMA_MODEL=ollama/minimax-m2.7:cloud
NEXT_PUBLIC_GOOGLE_PLACES_KEY=AIzaSyDzDOtBiN1e2gVUrI22hpPL4De3mVVW6aE
LITEAPI_PRIVATE_KEY=prod_851c1863-5c9a-472a-91c0-a04d5ed73e89
NEXT_PUBLIC_SUPABASE_URL=https://eawzpyzahyoawztpuxln.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_T6gcibftd06MAJDgSEZ7jw_spWcMw2-
```
