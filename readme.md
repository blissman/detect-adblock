# detect-adblock

## Overview

This function allows one to detect whether the client is using an adblocker.

## How does that work?

We make an XMLHttpRequest "GET" request to the ads.js file, and if it's successful we set window.detectAB.ads to true, but if it gets blocked to false.

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
4. Include any callbacks you want in the "then" methods.