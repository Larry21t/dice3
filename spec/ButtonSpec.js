describe("Button", function(){
    var button;
    var viewModel;

    beforeEach(function(){
        button = new Button();
    });

    it("muss erstellt werden können", function(){
        expect(button).toBeTruthy();
    });
});