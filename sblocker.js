function blockPosts() {
  var ca = document.getElementsByClassName("_4-eo _2t9n _50z9");
  for(i=0; i < ca.length; i++) {
    var ele = ca[i];

    rembrandt = new Rembrandt({
      // `imageA` and `imageB` can be either Strings (file path on node.js,
      // public url on Browsers) or Buffers
      imageA: 'https://raw.githubusercontent.com/siriscac/sarahah_blocker_fb/master/ref/base.png',
      imageB: ele.getAttribute("data-ploi"),

      // Needs to be one of Rembrandt.THRESHOLD_PERCENT or Rembrandt.THRESHOLD_PIXELS
      thresholdType: Rembrandt.THRESHOLD_PERCENT,

      // The maximum threshold (0...1 for THRESHOLD_PERCENT, pixel count for THRESHOLD_PIXELS
      maxThreshold: 0.01,

      // Maximum color delta (0...255):
      maxDelta: 20,

      // Maximum surrounding pixel offset
      maxOffset: 0,

      renderComposition: true, // Should Rembrandt render a composition image?
      compositionMaskColor: Rembrandt.Color.RED // Color of unmatched pixels
    });

    // Run the comparison
    rembrandt.compare().then(function (result) {
        // console.log('Passed:', result.passed)
        // console.log('Pixel Difference:', result.differences, 'Percentage Difference', result.percentageDifference, '%')
        if(result.percentageDifference < 25) {
          findAndHide(ele);
        }
    }).catch((e) => {
        console.error(e)
    });
  }
}

function findAndHide(parent) {
  if(parent.classList.contains("k__2iuiywa1")) {
    parent.style.display = "none";
    console.log("Hiding Sarahah post");
  } else {
    findAndHide(parent.parentElement);
  }
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var postCount = 0;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    //console.log(mutations, observer);
    //blockPosts();
    var posts = document.getElementsByClassName("_5jmm _5pat _3lb4 k__2iuiywa1");
    if(posts.length > postCount) {
      postCount = posts.length;
      blockPosts();
    }
});

blockPosts();

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});
