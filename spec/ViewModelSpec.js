describe("ViewModel", function(){
    var button;
    var viewModel;
    var body = document.getElementsByTagName("body")[0];

    beforeEach(function(){
        viewModel = new ViewModel()
        button = jasmine.createSpyObj('Button', {
            onclick: undefined
        });

        randomNumberGenerator = jasmine.createSpyObj('RandomNumberGenerator', {
            perform: undefined,
            getValue: 4
        });

        viewModel.onButtonClicked()
    });


    // it("muss den Textblock rendern", function(){
    //     expect(body.innerHTML).toContain("id=\"textBlock1\"")
    // });


    // it("muss den Button rendern", function(){
    //     expect(body.innerHTML).toContain("id=\"button1\"")
    // });


    it("muss randomNumberGenerator.perform() aufrufen", function(){
        expect(randomNumberGenerator.perform).toHaveBeenCalled()
    });


    it("muss randomNumberGenerator.getValue() aufrufen", function(){
        expect(randomNumberGenerator.getValue).toHaveBeenCalled()
    }); 

    it("muss den Textblock rendern", function(){
        expect(body).toHaveAChildnode("DIV", "#textBlock1")
    });

    it("muss den Button rendern", function(){
        expect(body).toHaveAChildnode("BUTTON", "#button1")
    });



});
 
