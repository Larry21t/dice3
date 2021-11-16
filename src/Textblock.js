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