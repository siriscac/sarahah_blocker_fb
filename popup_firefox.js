document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('blockPosts');
  console.log(checkPageButton);
  checkPageButton.addEventListener('click', (tabs) => {
    var getActiveTab = browser.tabs.query({active: true, currentWindow: true});
    getActiveTab.then((tabs) => {
      console.log("Blocking posts on tab " + tabs[0].id);
      browser.tabs.executeScript(tabs[0].id, {
        file: "resemble.js"
      });
      browser.tabs.executeScript(tabs[0].id, {
        file: "sblocker.js"
      });
    });
  }, false);
}, false);