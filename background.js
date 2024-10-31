chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("medium.com")) {
    const articlePattern = /^https:\/\/medium\.com\/[^\/]+\/[^\/]+$/;

    if (articlePattern.test(tab.url)) {
      const freediumUrl = `https://freedium.cfd/${encodeURIComponent(tab.url)}`;
      chrome.tabs.update(tabId, { url: freediumUrl });
    }
  }
});
