window.detectAB = (() => {
    return {
        makeRequest: (url, method) => {
            const request = new XMLHttpRequest();

            return new Promise((resolve, reject) => {
                request.onreadystatechange = () => {
                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status >= 200 && request.status < 300) {
                        resolve(request);
                    } else {
                        reject({
                            status: request.status,
                            statusText: request.statusText
                        });
                    }
                };
                request.open(method || "GET", url, true);
                request.send();
            });
        },

        setAds: (state) => {
            if (!window.detectAB) {
                window.detectAB = {};
            };
            window.detectAB.ads = !!state;
        }
    };
})();

window.detectAB.makeRequest("./ads.js").then((data) => {
    window.detectAB.setAds(true);
}).catch((error) => {
    console.log("ads.js load failed with status: " + error.status + " text: " + error.statusText);
    window.detectAB.setAds(false);
});