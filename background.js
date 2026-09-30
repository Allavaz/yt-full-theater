async function updateBadge(enabled) {
  await chrome.action.setBadgeText({ text: enabled ? "" : "off" });
}

chrome.action.onClicked.addListener(async () => {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
  updateBadge(!enabled);
});

chrome.runtime.onStartup.addListener(async () => {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  updateBadge(enabled);
});
