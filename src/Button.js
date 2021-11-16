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