(function() {
    "use strict";
    const element = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.id = "adblocker-test-js";
    // change this to the path of your scripts folder
    script.src = "./ads.js";
    element.appendChild(script);
})();