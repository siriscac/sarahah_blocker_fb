var checked = {}; // Hashmap to store ids of posts that are checked already
var totalBlocked = 0;
var imagePostCount = 0;
var linkPostCount = 0;

// Block posts after comparing the images
function blockPosts() {
  var ca = document.getElementsByClassName("scaledImageFitWidth");
  if(imagePostCount < ca.length) {
    imagePostCount = ca.length;
    for(i=0; i < ca.length; i++) {
      var ele = ca[i];
      //if image is not checked already
      if(!checked[ele.getAttribute("src")]) {
        checked[ele.getAttribute("src")] = true;
        resemble('https://raw.githubusercontent.com/siriscac/sarahah_blocker_fb/master/ref/base.png').compareTo(ele.getAttribute("src")).scaleToSameSize().ignoreAntialiasing().onComplete(function(data){
      	   //console.log(data);
           if(data.rawMisMatchPercentage < 28) {
             findAndHide(ele, ele.getAttribute("src"));
           }
        });
      }
    }
  }
}

// Block all links that has "sarahah"
function blockLinks() {
  var ln = document.querySelectorAll('a[href*="sarahah"]');
  if(linkPostCount < ln.length) {
    linkPostCount = ln.length;
    for(i=0; i < ln.length; i++) {
      if(!checked[ln[i].getAttribute('href')]) {
        checked[ln[i].getAttribute('href')] = true;
        findAndHide(ln[i], ln[i].getAttribute('href'));
      }
    }
  }
}

// Hide the parent element containing a sarahah post
function findAndHide(parent, src) {
  if(parent != null) {
    if(parent.id.indexOf("hyperfeed_story_id") !== -1) {
      parent.style.display = "none";
      console.log("Hiding Sarahah post with id " + parent.id + " and link " + src);
      console.log("Total Blocked: " + ++totalBlocked);
    } else {
      findAndHide(parent.parentElement, src);
    }
  } else {
    console.log("Couldn't hide Sarahah post");
  }
}

// Initial blocking
blockPosts();
blockLinks();

// Observe feed for new Sarahah posts
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    blockPosts();
    blockLinks();
});

var loader = document.querySelectorAll('[role="feed"]')[0];
if (loader) {
  loader = loader.childNodes[2];
  // Observe mutations in feed's subtree
  observer.observe(loader, {
    subtree: true,
    childList: true
  });
}
