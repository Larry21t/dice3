describe("Button", function(){
    var button;
    var viewModel;

    beforeEach(function(){
        button = new Button();
        viewModel = jasmine.createSpyObj('ViewModel', {
            onButtonClicked: undefined
        })
    });

    it("muss erstellt werden können", function(){
        expect(button).toBeTruthy();
    });
});