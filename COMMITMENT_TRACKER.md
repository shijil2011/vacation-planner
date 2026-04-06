# 📋 COMMITMENT_TRACKER.md

## Purpose
Never let a promised deliverable go silent. This file is checked on every heartbeat and cron tick.

## Format
```
| Promise | Deadline | Status | Notes |
|---------|----------|--------|-------|
| Phase 1 homepage redesign | 2026-04-06 05:45 GMT+2 | OVERDUE | Promised at 22:55, failed |
```

## Rules
1. **Before making ANY promise** → Log it here with deadline
2. **Every 5 minutes (cron)** → Check this file. If any row is OVERDUE → Send alert to Shijil via Telegram
3. **On heartbeat** → Check this file first, report overdue items
4. **On deliverable completion** → Mark status DONE, remove from active list

## Active Promises
| Promise | Deadline | Status | Since |
|---------|----------|--------|-------|
| Phase 1 homepage + From/To form | 2026-04-06 05:45 GMT+2 | OVERDUE | 22:12 yesterday |

## Completed
(none yet)
