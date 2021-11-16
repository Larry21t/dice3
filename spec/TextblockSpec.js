describe("Textblock", function(){
    var textBlock;

    beforeEach(function(){
        textBlock = new TextBlock()
    });

    it("muss erstellt werden können", function(){
        expect(textBlock).toBeTruthy()
    });
});