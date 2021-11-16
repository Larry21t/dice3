describe("RandomNumberGenerator", function(){
    var randomNumberGenerator;

    beforeEach(function(){
        randomNumberGenerator = new RandomNumberGenerator(1, 6);
    });

    it("muss erstellt werden können", function(){
        expect(randomNumberGenerator).toBeTruthy();
    });

    it("muss eine Zahl im gewünschten Bereich generieren können", function(){
        for(i = 0; i < 1000; i++){
            randomNumberGenerator.perform();
            expect(randomNumberGenerator.getValue()).toBeGreaterThanOrEqual(1);
            expect(randomNumberGenerator.getValue()).toBeLessThanOrEqual(6);
        };
    });
});