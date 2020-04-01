const assert = require('chai').assert;
const app = require('../app');

describe("Application Unit Test", function(){
    describe("printHello()", ()=>{
        it("app should return hello world", function(){
            const result = app.printHello();
            assert.equal(result, "Hello");
        });
    
        it("app should be of type String", () =>{
            const res = app.printHello();
            assert.typeOf(res, 'string');
        })
    })
    describe("addNumber()", ()=>{
        it("app should return retuen atleast 5", function(){
            const result = app.addNumbers(2,6);
            assert.isAbove(result, 5);
        });
    
        it("app should be of type number", () =>{
            const res = app.addNumbers(2,7);
            assert.typeOf(res, 'number');
        })
    })
    // describe("addNumber()", ()=>{
    //     it("app should return retuen atleast 5", function(){
    //         const result = app.addNumbers(2,0);
    //         assert.isAbove(result, 5);
    //     });
    
    //     it("app should be of type number", () =>{
    //         const res = app.addNumbers(2,7);
    //         assert.typeOf(res, 'number');
    //     })
    //})
})