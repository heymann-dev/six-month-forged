# Project Northstar v30 — Verified Momentum Campaign

Project Northstar v30 is the verified release of the complete military-field Northstar application. It preserves the v29 interface, dates, schedule logic, scoring, levels, rank maintenance, recovery systems, goals, reviews, photographs, cash tracker, master tasks, 23 achievement patches, weekly Boss Missions, campaign map, and 19 sealed rewards.

## v30 correction

The structured JSON and full photo-inclusive backup already preserved the complete daily record. The CSV history export did not include the full daily checklist or daily reflection note. v30 corrects that export gap.

The CSV now includes:

- Day type and schedule suggestion
- Completion, Adaptive XP/status, and Northstar Score
- Nutrition, sleep, energy, stress, work, blood-sugar, pain, and swelling fields
- Mission text and completion evidence
- Full-checklist count, percentage, and completed-item list
- Daily reflection
- Symptom and protocol notes
- Rank-maintenance and Reset Protocol evidence

No score, level, reward, date, schedule, or storage-schema behavior was changed.

## Verified systems

- Seven color-coded navigation pages
- Adaptive Work Night, Off Day, and Post-Shift Recovery quests
- Daily XP and original weighted Northstar Score
- Fifty levels, active rank, historical peak, and controlled level loss
- Twenty-three permanent evidence patches
- Ten campaign sectors and deterministic weekly Boss Missions
- Nineteen sealed reward gates
- Night-shift rotation and four-night bridge detection
- Recovery, Mountains, Goals, Reviews, Cash, Physique, Tasks, History, and Data modules
- CSV export, structured JSON export, full photo-inclusive backup, and restore
- Existing-data migration and local-storage persistence
- Desktop and 390-pixel mobile layouts

## Data compatibility

Existing storage remains compatible:

- `sixMonthForge.v6`
- `sixMonthForge.archive.v1`
- `sixMonthForge.photos.v1`

The latest automatic migration safety copy remains:

- `sixMonthForge.preV29Backup`

v30 introduces no new data schema and does not wipe existing records.

## Fixed project dates

- Start: July 15, 2026
- End: December 31, 2026
- Early reward phase: July 15–September 15, 2026
- No-Slither 90-day milestone: October 12, 2026

## Deployment

Upload the contents of this folder to the repository root and open:

`https://heymann-dev.github.io/six-month-forged/?v=30`

Export a full JSON + photo backup before replacing the live files. Do not clear Safari website data, because Northstar records are stored locally in the browser.
