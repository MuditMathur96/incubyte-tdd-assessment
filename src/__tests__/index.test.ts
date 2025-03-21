import sayHello from ".."


describe("Initial test",()=>{

    test("first test",()=>{
        expect(sayHello()).toBe("Hello World")
    })

})