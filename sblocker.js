var checked = {};
var totalBlocked = 0;

function blockPosts() {
  var ca = document.getElementsByClassName("scaledImageFitWidth");
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

function blockLinks() {
  var ln = document.querySelectorAll('a[href*="sarahah"]');
  for(i=0; i < ln.length; i++) {
    findAndHide(ln[i], ln[i].getAttribute('href'));
  }
}

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

blockPosts();
blockLinks();

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    blockPosts();
    blockLinks();
});

var loader = document.querySelectorAll('[role="feed"]')[0];
if (loader) {
  loader = loader.childNodes[2];
  // define what element should be observed by the observer
  // and what types of mutations trigger the callback
  observer.observe(loader, {
    subtree: true,
    attributes: true
  });
}
