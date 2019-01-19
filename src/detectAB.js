(function() {
    "use strict";
    const element = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.id = "adblocker-test-js";
    // change this to the path of your scripts folder
    script.src = "//ads.js";
    element.appendChild(script);

    if (!window.detectAB) {
        window.detectAB = {};
    }
    window.detectAB.detect = (callback) => {
        if (typeof(callback) !== "function") {
            return false;
        }
        if (window.detectAB.ads) {
            // do something if ads are available
            callback();
            return true;
        } else {
            return false;
        }
    };
})();