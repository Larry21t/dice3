 var randomNumberGenerator;
 
class RandomNumberGenerator{
    constructor(min, max){
        this.min = min
        this.max = max
    }

    perform(){
        this.value = this.min + Math.floor(Math.random()*(this.max - this.min +1))
    }

    getValue(){
        return this.value
    }
}