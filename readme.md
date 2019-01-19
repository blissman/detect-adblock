# detect-adblock

## Overview

This function allows one to detect whether the client is using an adblocker.

## How does that work?

Most adblockers will have rules to detect JavaScript files that add trackers or marketing to a page. The detectAB.js script will attempt to append ads.js to the head of the page, which sets a flag to true. If you run detectAB.detect with a callback method, it will run your callback.
## Pre-Requisites

### Homebrew

Install [Homebrew](https://brew.sh/) if you're on macOS (it'll make the following installs much easier).

### Node.js

You'll need to install [Node.js](https://nodejs.org/en/). If you're on macOS and have Homebrew installed, you can do this by typing into your terminal:

```bash
$ brew install node
```

### Gulp.js

You'll also need to install [Gulp.js](https://gulpjs.com/).
```bash
$ npm install gulp-cli -g
```

## Build Instructions

1. clone this repo
2. at your terminal, type: `$ npm install`
3. run your default build process with: `$ gulp`

## Using the Scripts

1. Include the ```ads.js``` and ```detectAB.js``` files in your scripts folder.
2. Update the path to ```ads.js``` in the ```detectAB.js``` script.
3. Include the ```detectAB.js``` script on your page.
4. Call the detectAB.detect method with a callback.
5. If ads are enabled, it should run your callback.