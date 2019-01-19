describe('detect-adblock', function() {

    it('should include the ads.js script into the head', function() {
        expect(window.detectAB.ads).toBe(true);
    });

});