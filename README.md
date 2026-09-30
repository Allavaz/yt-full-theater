# YouTube Full-Height Theater

A Chrome extension that makes YouTube's theater mode work like Twitch's: the player fills the entire window and the top bar is hidden.

By default, YouTube's theater mode caps the player height so the video title peeks out below it. This extension removes that cap. The title, description and comments are still there — just scroll down.

## Install

1. Clone or download this repository.
2. Open `chrome://extensions` and enable **Developer mode** (top right).
3. Click **Load unpacked** and select the project folder.
4. Open any YouTube video and enter theater mode (the theater button or the `t` key).

## Usage

- **Theater mode** (`t`): the player fills the full window and the YouTube top bar is hidden.
- **Default view**: unchanged.
- **Toolbar icon**: click to turn the extension on or off. An "off" badge shows when it's disabled.

The top bar is only hidden on a video page in theater mode. The home page, search results and default video view are untouched.

## How it works

| File | Purpose |
| --- | --- |
| `manifest.json` | Manifest V3 config; injects the content script and CSS on `youtube.com` |
| `theater.css` | Overrides the theater-mode player height and hides the top bar |
| `content.js` | Toggles the `ytft-on` class and triggers a player resize when theater mode changes |
| `background.js` | Handles the toolbar icon toggle and badge |

## Troubleshooting

YouTube occasionally renames elements in its page layout. If the player stops expanding, the selectors in `theater.css` (`ytd-watch-flexy`, `#full-bleed-container`, `#masthead-container`) probably need updating.
