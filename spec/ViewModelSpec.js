describe("ViewModel", function(){
    var button;
    var viewModel;
    var randomNumberGenerator;
   

    beforeEach(function(){
        viewModel = new ViewModel()
        button = jasmine.createSpyObj('Button', {
            onclick: undefined
        });
        randomNumberGenerator = jasmine.createSpyObj('RandomNumberGenerator', {
            perform: undefined
        })
        
    });

    it("muss randomNumberGenerator.perform() aufrufen", function(){
        viewModel.onButtonClicked()
        expect(randomNumberGenerator.perform).toHaveBeenCalled()
    })
});