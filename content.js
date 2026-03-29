chrome.storage.sync.get(["focusMode"], (result) => {
  if (!result.focusMode) return;

  const hideElements = () => {
    const selectors = [
      "ytd-rich-grid-renderer",
      "ytd-watch-next-secondary-results-renderer",
      "#related",
      "#secondary",
      "ytd-rich-section-renderer",
      "ytd-reel-shelf-renderer",
      "ytd-guide-entry-renderer",
      "tp-yt-paper-item",
      "ytd-mini-guide-entry-renderer"
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        const text = el.innerText ? el.innerText.toLowerCase() : "";
        const href = el.getAttribute("href") || "";
        const html = el.innerHTML ? el.innerHTML.toLowerCase() : "";

        if (
          text.includes("shorts") ||
          href.includes("/shorts") ||
          html.includes("shorts")
        ) {
          el.style.display = "none";
        }
      });
    });

    document.querySelectorAll("a").forEach((el) => {
      const text = el.innerText ? el.innerText.toLowerCase() : "";
      const href = el.getAttribute("href") || "";

      if (text.includes("shorts") || href.includes("/shorts")) {
        el.style.display = "none";
      }
    });
  };

  hideElements();
  setInterval(hideElements, 1000);
});