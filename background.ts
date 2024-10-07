chrome.action.onClicked.addListener((tab) => {
  if (tab.url?.includes("streamyard.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      files: ["content.js"]
    });
  }
});