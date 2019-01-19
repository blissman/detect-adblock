describe("ads-enabled", function() {

    it("detectAB.detect should return false if the callback parameter is not a function", function() {
        expect(window.detectAB.detect("string")).toBe(false);
    });

    it("detectAB.detect should return true if a callback is a function, and ads are enabled", function() {
        const callback = () => {
            return;
        };
        expect(window.detectAB.detect(callback)).toBe(true);
    });

});