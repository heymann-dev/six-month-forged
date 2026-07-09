# Six-Month Forge

Phone-first Progressive Web App for Hudson's Northstar system.

## Main flow

1. Open app.
2. Tap **Log Today**.
3. Check the daily boxes.
4. Track right ankle/medial malleolus pain and left knee pain.
5. If either pain score is **over 6**, add the detail note that appears.
6. Review Progress and Weekly packet.
7. Back up weekly.

## Current build notes

- Navigation is now a compact sticky top rail, not a fixed overlay, so it cannot block progress grids or logging cards.
- Right ankle/medial malleolus pain and left knee pain are tracked separately.
- Pain over 6 opens a required-detail style prompt for trigger/load/location/symptoms.
- Existing older ankle pain data migrates safely into the new ankle field.
- Data autosaves to localStorage on input, page changes, page hide, and before close. Current typed inputs are flushed before navigation/backup to prevent debounce-related data loss.
- Physique drafts autosave before the monthly update is formally saved.
- Includes PWA manifest, service worker, app icons, and calendar reminder files.

## GitHub Pages upload

Upload the unzipped files directly to the repository root:

```text
index.html
manifest.json
service-worker.js
icon-192.png
icon-512.png
apple-touch-icon.png
weekly-reflection-saturday-5pm.ics
northstar-daily-checkin-5pm.ics
README.md
```

Then enable GitHub Pages from `main` / root. Open the Pages URL in Safari and use Share → Add to Home Screen.

## Reliability

This is a static local-first app. It saves reliably on the same device/browser as long as browser storage is not cleared. Use the Backup screen weekly.


## v11 update
- Added daily Addiction Protocol run / not-needed checkbox.
- Added daily Reading + prayer checkbox.
- Added daily protocol note field that autosaves and is included in weekly review packets.
- Progress and insights now flag low protocol consistency and low reading/prayer consistency.
- Service worker cache bumped to v11.


## v12 update
- Added Left ACL Reconstruction timeline using 7/1/2025 surgery date.
- Added ACL days-post-op and 18-month durability checkpoint countdown.
- Added Surgery Trackers card to Progress.
- Weekly review packet now includes right ankle/foot and left ACL surgery timeline context.
- Service worker cache bumped to v12.
