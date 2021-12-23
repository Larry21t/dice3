
class ViewModel{
    render(){
        var body = document.getElementsByTagName("body")[0]
        var div1 = document.getElementById("div1")
        if (div1){
            body.removeChild(div1)
        }
        div1 = document.createElement("div")
        div1.id = "div1"
        var button1 = new Button()
        button1.buttonID = "button1"
        button1.buttonText = 'wuerfeln'
        button1.onclickFunction= this.onButtonClicked.bind(this)
        var textBlock1 = new TextBlock()
        textBlock1.textID = "textBlock1"
        textBlock1.text = '' + randomNumberGenerator.getValue()  
        div1.appendChild(button1.buttonElement)
        div1.appendChild(textBlock1.textElement)
        body.appendChild(div1)
    }
   
    onButtonClicked() {
        randomNumberGenerator.perform()
        this.render()
    } 
}


