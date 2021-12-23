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
     * @param {string} value
     */
     set buttonID(value){
        this.button.id = value
    }
    
    /**
     * @param {(this: GlobalEventHandlers, ev: MouseEvent) => any} myfunction
     */
    set onclickFunction(myfunction){
        this.button.onclick = myfunction
    }
}