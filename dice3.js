class RandomNumberGenerator{
    constructor(min, max){
        this.min = min
        this.max = max
    }

    perform(){
        this.value = 1+ Math.floor(Math.random()*(this.max - this.min +1))
    }

    getValue(){
        return this.value
    }
}


class Button{ 
    constructor(){
        this.button = document.createElement("button")
    }

    /**
     * @param {string} value
     */
    set buttonText(value){
        this.button.textContent = value
    }

    get buttonElement(){
        return this.button
    }

    
    
    /**
     * @param {(this: GlobalEventHandlers, ev: MouseEvent) => any} myfunction
     */
    set onclickFunction(myfunction){
        this.button.onclick = myfunction
    }
}


class TextBlock{
    constructor(){
        this.textBlock = document.createElement("div")
    }

    /**
     * @param {string} value
     */
    set text(value){
        this.textBlock.textContent = value
    }

    get text(){
        return this.textBlock.textContent
    }

    get textElement(){
        return this.textBlock
    }
}

class ViewModel{   
    render(){
        var body = document.getElementsByTagName("body")[0]
        var button1 = document.getElementsByTagName("button")[0]
        if(button1){
            body.removeChild(button1)
        }
        button1 = new Button()
        button1.buttonText = 'wuerfeln'
        button1.onclickFunction= this.onButtonClicked.bind(this)
        var textBlock1 = document.getElementsByTagName("div")[0]
        if(textBlock1){
            body.removeChild(textBlock1)
        }
        textBlock1 = new TextBlock()
        textBlock1.text = '' + randomNumberGenerator.getValue()  
        body.appendChild(button1.buttonElement)
        body.appendChild(textBlock1.textElement)
    }
   
    onButtonClicked() {
        randomNumberGenerator.perform()
        this.render()
    }
    
}


var randomNumberGenerator = new RandomNumberGenerator(1,6)
var viewModel = new ViewModel()
viewModel.render()
