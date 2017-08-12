document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('blockPosts');
  console.log(checkPageButton);
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript({
        tabId: tab.id,
        file: "rembrandt.min.js"
      });
      chrome.tabs.executeScript({
        tabId: tab.id,
        file: "sblocker.js"
      });
    });
  }, false);
}, false);
