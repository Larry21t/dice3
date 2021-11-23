describe("ViewModel", function(){
    var button;
    var viewModel;

    beforeEach(function(){
        viewModel = new ViewModel()
        button = jasmine.createSpyObj('Button', {
            onclick: undefined
        });

        randomNumberGenerator = jasmine.createSpyObj('RandomNumberGenerator', {
            perform: undefined,
            getValue: 4
        })
    });

    it("muss button.onclick() aufrufen", function(){
        expect(button.onclick).toHaveBeenCalledWith(viewModel.onButtonClicked)
    });

    
    it("muss randomNumberGenerator.perform() aufrufen", function(){
        viewModel.onButtonClicked()
        expect(randomNumberGenerator.perform).toHaveBeenCalled()
    });;

    it("muss randomNumberGenerator.getValue() aufrufen", function(){
        viewModel.onButtonClicked()
        expect(randomNumberGenerator.getValue).toHaveBeenCalled()
    }); 
});