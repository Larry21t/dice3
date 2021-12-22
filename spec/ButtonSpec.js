describe("Button", function(){
    var button;

    beforeEach(function(){
        button = new Button();
    });

    it("muss erstellt werden können", function(){
        expect(button).toBeTruthy();
    });
});