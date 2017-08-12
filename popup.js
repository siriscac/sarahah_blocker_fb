document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('blockPosts');
  console.log(checkPageButton);
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      var id = tab.id;
      console.log("Blocking posts on tab " + id);
      chrome.tabs.executeScript(id, {
        file: "rembrandt.min.js"
      });
      chrome.tabs.executeScript(id, {
        file: "sblocker.js"
      });
    });
  }, false);
}, false);
