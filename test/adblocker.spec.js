describe("adblocker", function() {

    beforeAll(function() {
        delete window.detectAB.ads;
    });

    it("detectAB.detect should return false if the callback parameter is not a function", function() {
        expect(window.detectAB.detect("string")).toBe(false);
    });

    it("detectAB.detect should return false if a callback is a function, and ads are disabled", function() {
        const callback = () => {
            return;
        };
        expect(window.detectAB.detect(callback)).toBe(false);
    });

});