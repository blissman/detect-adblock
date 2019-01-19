(function() {
    if (!window.detectAB) {
        window.detectAB = {};
    }
    if (window.detectAB.ads) {
        // do something if ads are available
        console.log("detectAB: ads are enabled");
    } else {
        // do something else if ads are blocked
        console.log("detectAB: ads are blocked");
    }
})