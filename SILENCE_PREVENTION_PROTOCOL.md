# ⚠️ SILENCE_PREVENTION_PROTOCOL.md

## Why Sessions Go Silent (Root Causes)

| Cause | How to Prevent |
|-------|----------------|
| Model session ends with `stopReason: stop` and no work is queued | Always use background exec or spawn sub-agent for long tasks |
| Agent completes a task but doesn't continue to next | Commit to next task explicitly before ending turn |
| Context limit reached → compaction causes delay | Keep context clean, commit often |
| Sub-agent fails/aborts silently | Never rely on single sub-agent; always have backup |
| User goes quiet → agent waits indefinitely | Cron job checks for overdue promises |

## 🚨 AUTOMATIC ESCALATION RULES

### Rule 1: Promise Tracking
- **BEFORE** making any promise → Create entry in `COMMITMENT_TRACKER.md`
- **Format**: `| Promise | Deadline | Status | Notes |`

### Rule 2: Cron Monitoring (ACTIVE)
```
Every 5 minutes → runs /root/.openclaw/scripts/check-promises.sh
```
Script checks `COMMITMENT_TRACKER.md` for `OVERDUE` rows:
- If found → sends Telegram alert to Shijil immediately
- Throttled to 1 alert per 30 minutes max

### Rule 3: Heartbeat Check
- **On every heartbeat** → Check `COMMITMENT_TRACKER.md` first
- Report any overdue items to user proactively

### Rule 4: Long Task Handling
When starting a task that takes >5 minutes:
```
OPTION A (preferred): Spawn background exec
  exec(command, background=true, yieldMs=300000)
  → Work continues even if session stops

OPTION B: Commit to memory
  Write progress to COMMITMENT_TRACKER.md
  Write next step to MEMORY.md
  → If session dies, next wakeup resumes from MEMORY.md
```

### Rule 5: No More Silent Failures
- Never say "building now" without spawning background work or committing to a follow-up
- If I can't complete in this session → Write exactly what needs to be done to MEMORY.md
- If session ends → Next message from Shijil triggers read of MEMORY.md → Resume work

## 📁 Key Files
| File | Purpose |
|------|---------|
| `COMMITMENT_TRACKER.md` | Active promises with deadlines |
| `MEMORY.md` | Long-term state + next action |
| `.WAKEUP_TRIGGER` | Auto-wake mechanism (exists) |
| `/root/.openclaw/scripts/check-promises.sh` | Cron script (active, */5 min) |

## 🔄 The Prevention Loop
```
Promise Made → COMMITMENT_TRACKER.md updated
     ↓
Timer runs every 5 min → check-promises.sh
     ↓
If OVERDUE → Telegram alert to Shijil
     ↓
Also on heartbeat → Check COMMITMENT_TRACKER.md
     ↓
Report to Shijil → Resume or reassign
```

## ❌ What NOT To Do
- Don't make promises without logging them
- Don't end session without committing next step to memory
- Don't rely on single sub-agent for critical tasks
- Don't let long builds run without background continuation
