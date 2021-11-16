class ViewModel{
    // constructor(randomNumberGenerator){
    //     this.randomNumberGenerator = randomNumberGenerator
    // }
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


