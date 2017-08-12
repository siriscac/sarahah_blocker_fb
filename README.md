# Sarahah posts Blocker for Facebook - Chrome Extension

Annoyed by all those Sarahah images on Facebook? Use this extension to block them all. 

## How to install?
1) Download and Extract the Extension bundle from `releases`
2) Goto `chrome://extensions`
3) Enable Developer mode and then click `Load unpacked extension` button on the extensions.
4) Load the extracted bundle
5) Now you'll see the extension on the extensions bar, open and click `Block Posts` to block all Sarahah images.
6) `innerPeace = "achieved"`.

## How does it work?
This extension uses Resemble JS library to compare the images with the reference image under `/ref/base.png` and hides the post that have similar images.

## Disclaimer
This solution was put together in an hour's time and hence, it's not an optimal one. Your facebook tab might get slow or  unresponsive occasionally while using this extension - to fix this, simply reload the page and block posts again.

## License

    Copyright 2017 Muthuramakrishnan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
