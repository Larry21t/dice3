
beforeEach(function (){
    jasmine.addMatchers({
        toHaveAChildnode: function(){
            return{
                compare: function (actual, expected, expected2){

                    return{
                        pass:
                        actual.querySelector(expected2) && expected === actual.querySelector(expected2).tagName
                    }
                }
            }
        }
    })
})



