# 💓 HEARTBEAT.md - TripBuilder Agent

## Critical: WAKE-UP RESPONSE PROTOCOL

When `.WAKEUP_TRIGGER` file exists:
1. **Read the trigger file immediately**
2. **Send acknowledgment**: Reply with "TripBuilder agent awake - checking vacation plans..."
3. **Read MASTER_PLAN.md and TASKS.md** and identify pending work
4. **Report status** to user: Current task, progress %, next action, any blockers
5. **Delete .WAKEUP_TRIGGER file**
6. **Resume highest priority task**

## 📋 Task Check (Every Heartbeat)
- [ ] Read `TASKS.md` in this workspace
- [ ] Check `.WAKEUP_TRIGGER` file - respond immediately if present
- [ ] Check MASTER_PLAN.md for next steps
- [ ] Report progress on Vacation Planner app

## Model Fallback Chain (Ollama Cloud Only)
1. **Primary**: ollama/glm-5:cloud
2. **Fallback 1**: ollama/minimax-m2.7:cloud
3. **Fallback 2**: ollama/minimax-m2.5:cloud
4. **Fallback 3**: ollama/kimi-k2.5:cloud

## Continuous Work Rules
- Acknowledge every user message within 30 seconds
- Report progress every 2 minutes during long operations
- Never go silent for more than 5 minutes without reporting status
- On error, retry with fallback model

If nothing needs attention, reply HEARTBEAT_OK.
