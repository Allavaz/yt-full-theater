const root = document.documentElement;

// Nudge YouTube's player to recompute the video size after the container changes
const refit = () => requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));

function apply(enabled) {
  root.classList.toggle("ytft-on", enabled);
  refit();
}

chrome.storage.local.get({ enabled: true }, ({ enabled }) => apply(enabled));
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) apply(changes.enabled.newValue);
});

// Refit when theater mode is toggled or on YouTube's SPA navigation
new MutationObserver(refit).observe(root, { subtree: true, attributeFilter: ["theater", "full-bleed-player"] });
document.addEventListener("yt-navigate-finish", refit);
