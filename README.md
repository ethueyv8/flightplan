# Flight Plan Transformer

Converts a flight plan exported from **ForeFlight** (`.fpl`) into a file the **Garmin GPSMAP 696** can import from an SD card. Runs on iPhone and iPad as a web app, and works offline once installed.

**App:** https://ethueyv8.github.io/flightplan/

Current version: **2026.2.0**

## Install (each iPhone or iPad)

1. Open the app address above in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Name it **FPL Transform**, leave **Open as Web App** on, and tap **Add**.
4. Open the app from the home screen icon while online, until the button bar shows **Offline ready ✓**.

Always open the app from the icon, not from Safari. The full instructions are in the PDF user guide and on the app's **Help** screen.

## What the conversion does

- Reformats the date and removes the aircraft and departure-time blocks
- Renames map points ForeFlight names after coordinates (such as `41.75N/112.09W`) to names the 696 accepts (1 to 8 capital letters or numbers, for example `DIJ1`)
- Adds country codes, blank comments and the 696 layout; rounds coordinates to 6 decimals
- Sets the **plan name** the 696 shows in its flight plan list
- Keeps waypoint names unique between pilots: each pilot has a waypoint letter, and the app refuses a name already used at another place
- Optional cruise-altitude notes for each leg

The rules are listed and editable in the app under **Business Rules**.

## Files in this repository

| File | Purpose |
|---|---|
| `index.html` | The app |
| `sw.js` | Saves the app on the device for offline use |
| `manifest.webmanifest` | Home screen name and icon |
| `icon-180.png`, `icon-512.png` | App icons |
| `help/` | Pictures used by the Help screen |
| `README.md` | This file |

All files must stay at the top level, with the pictures inside `help/`.

## Publishing an update

1. Upload the changed files to the top level of this repository and commit.
2. Every new version must include a new `sw.js` (its `CACHE` line carries the version). Without it, devices keep the old version.
3. On each device, open the app from the icon while online, close it, and open it again. Check the version under **Configuration**. If it has not changed, delete the icon and install again (export any changed business rules first).

Version numbers are **year.release.fix**, for example `2026.2.0`.

## Privacy

The app runs entirely on the device. Flight plans, settings and business rules never leave the iPhone or iPad. This repository contains only the app.

## Disclaimer

This app helps prepare a file. The pilot is responsible for checking the imported route on the Garmin before flight.
