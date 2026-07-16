# Project Northstar v30 Migration Notes

v30 is data-compatible with v29 and earlier migrated Northstar releases.

## Unchanged keys

- `sixMonthForge.v6`
- `sixMonthForge.archive.v1`
- `sixMonthForge.photos.v1`

## Safety backup

The existing v29 migration mechanism retains `sixMonthForge.preV29Backup` when upgrading older state.

## v30 data change

There is no new persisted-data schema. v30 changes only the CSV export columns so more of the already-saved daily record is included in spreadsheet exports.

## Verified migration

A legacy fixture preserved daily history, reflection, nutrition, custom goals, completed tasks, cash balance, active rank, historical peak, rewards, and gamification state after migration.
