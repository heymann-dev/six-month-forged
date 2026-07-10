# Project Northstar v20 — Goals Lock-In

The goals-and-milestones release for Hudson’s six-month recovery, attention-control, financial, career, life-administration, physique, and Return-to-Mountains command center.

## What changed in v20

### Dedicated Goals hub
A new **Goals** tab keeps annual outcomes one tap away without crowding the daily Home and Today flow. Home shows only the $100K cash progress and the next three active priorities.

### $100K cash-reserve staircase
The cash tracker includes:

- editable current cash, target, target date, and strategy
- $10,000 milestone staircase through $100,000
- amount and percentage remaining
- next checkpoint
- required monthly pace based on the selected target date
- dated snapshots with notes and change history

Use one consistent definition of cash across updates. Investment balances remain separate unless Hudson intentionally changes the definition.

### 2026 outcome trackers
The app now tracks:

- 90 consecutive No-Slither days
- Six-Month Forge completion with logged evidence
- safe Return-to-Mountains progression
- durable lower-body strength and control
- official monthly physique evidence
- ICU / critical-care pathway development
- NIHSS and violence-prevention education
- essential life-administration completion
- UBT / Unit Council participation

Evidence-linked goals update automatically where possible. Manual goals remain editable and custom goals can be added.

### Consolidated 2026 commitments
The Goals page includes editable tasks for:

- trusted-support-person blocker control on August 2, 2026
- $1,200 check to Dad
- monthly haircut and reviews
- passport
- NIHSS training
- violence-prevention training
- sleeping sound blocker
- getting the drone working
- monthly $100K cash update
- official monthly physique photos

## Data preservation

- Existing compatibility key remains `sixMonthForge.v6`.
- v16–v19 data is migrated rather than replaced.
- A pre-v20 local migration copy uses `sixMonthForge.preV20Backup`.
- Structured history remains mirrored in IndexedDB `sixMonthForge.archive.v1`.
- Compressed photos remain in IndexedDB `sixMonthForge.photos.v1`.
- Full JSON + photo exports remain the protection against device loss or deleted browser data.

## Important limitation

This remains a private browser-local app, not a cloud database. Keep original images in iPhone Photos and create a verified full backup at least every 14 days.

## Deployment

Upload the unzipped root files and the complete `assets` folder to GitHub Pages. Fresh URL:

`https://heymann-dev.github.io/six-month-forged/?v=20`
