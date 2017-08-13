# Sarahah posts Blocker for Facebook - Chrome Extension

Annoyed by all those Sarahah images and links on Facebook? Use this extension to block them all.

## How to install?
1) Download and Extract the Extension bundle from the [releases](https://github.com/siriscac/sarahah_blocker_fb/releases) section
2) Goto the Extensions(chrome://extensions) page
3) Enable Developer mode and then click `Load unpacked extension` button.
4) Load the extracted bundle
5) Now you'll see the extension on the extensions bar, open and click `Block Posts` while on Facebook to block all Sarahah images.
6) `innerPeace = "achieved"`.

## How does it work?
This extension uses [Resemble JS](https://github.com/Huddle/Resemble.js/) library to compare the images on your feed with the reference image under `/ref/base.png` and hides the post that might have a similar one. It also checks if any anchor element that might contain the text "sarahah" in its href and hides the post if it does.

## Disclaimer
This solution was put together in an hour's time and hence, it's not an optimal one. Your facebook tab might get slow or unresponsive occasionally while using this extension - to fix this, simply reload the page and block posts again.

## License

    The MIT License (MIT) Copyright © 2017 Muthuramakrishnan

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the “Software”), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
