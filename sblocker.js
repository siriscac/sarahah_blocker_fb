var checked = {};

function blockPosts() {
  var ca = document.getElementsByClassName("scaledImageFitWidth");
  for(i=0; i < ca.length; i++) {
    var ele = ca[i];
    //if image is not checked already
    if(!checked[ele.getAttribute("src")]) {
      checked[ele.getAttribute("src")] = true;
      resemble('https://raw.githubusercontent.com/siriscac/sarahah_blocker_fb/master/ref/base.png').compareTo(ele.getAttribute("src")).scaleToSameSize().onComplete(function(data){
    	   //console.log(data);
         if(data.rawMisMatchPercentage < 30) {
           findAndHide(ele, ele.getAttribute("src"));
         }
      });
    }
  }
}

function findAndHide(parent, src) {
  if(parent != null) {
    if(parent.id.indexOf("hyperfeed_story_id") !== -1) {
      parent.style.display = "none";
      console.log("Hiding Sarahah post with id " + parent.id + " and image " + src);
    } else {
      findAndHide(parent.parentElement, src);
    }
  } else {
    console.log("Couldn't hide Sarahah post");
  }
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var postCount = 0;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    //console.log(mutations, observer);
    blockPosts();
});

blockPosts();
var loader = document.querySelectorAll('[role="feed"]')[0].childNodes[2];

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(loader, {
  subtree: true,
  attributes: true
});
