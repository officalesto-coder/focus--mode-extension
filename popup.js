const toggle = document.getElementById("toggleFocus");

chrome.storage.sync.get(["focusMode"], (result) => {
  toggle.checked = !!result.focusMode;
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ focusMode: toggle.checked }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});