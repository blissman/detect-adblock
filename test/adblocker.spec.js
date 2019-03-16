describe("adblocker", () => {

    beforeAll(() => {
        delete window.detectAB.ads;
    });

    it("should set the window.detectAB.ads to state", () => {
        window.detectAB.setAds(true);
        expect(window.detectAB).toBeDefined();
        expect(window.detectAB.ads).toEqual(true);
        window.detectAB.setAds(false);
        expect(window.detectAB).toBeDefined();
        expect(window.detectAB.ads).toEqual(false);
        window.detectAB.setAds(1);
        expect(window.detectAB).toBeDefined();
        expect(window.detectAB.ads).toEqual(true);
        window.detectAB.setAds(0);
        expect(window.detectAB).toBeDefined();
        expect(window.detectAB.ads).toEqual(false);
        window.detectAB.setAds(undefined);
        expect(window.detectAB).toBeDefined();
        expect(window.detectAB.ads).toEqual(false);
    });

});