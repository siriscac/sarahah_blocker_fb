function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("/Desktop/browser.min.js");

var ca = document.getElementsByClassName("_4-eo _2t9n _50z9");
for(i=0;i<ca.length;i++) {
  var a = new Image(), b = new Image();
  a.src = "https://qph.ec.quoracdn.net/main-qimg-ede95a0004aa1f1bb8866c1666e03e4c-c";
  b.src = ca[i].getAttribute("data-ploi");

  rembrandt = new Rembrandt({
  // `imageA` and `imageB` can be either Strings (file path on node.js,
  // public url on Browsers) or Buffers
  imageA: '/path/to/imageA',
  imageB: fs.readFileSync('/path/to/imageB'),

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
})

// Run the comparison
rembrandt.compare()
  .then(function (result) {
    console.log('Passed:', result.passed)
    console.log('Pixel Difference:', result.differences, 'Percentage Difference', result.percentageDifference, '%')
    console.log('Composition image buffer:', result.compositionImage)

    // Note that `compositionImage` is an Image when Rembrandt.js is run in the browser environment
  })
  .catch((e) => {
    console.error(e)
  })
  ca[i].style.display = "block";
}
