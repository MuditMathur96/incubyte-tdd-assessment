import Sum from "../sum";
describe("Test sum function",()=>{
    let obj:Sum;
    beforeAll(()=>{

        obj = new Sum();

    });

    
    test("test with comma seperated strings",()=>{
        expect(obj.sum("")).toBe(0);
        expect(obj.sum("1")).toBe(1);

        expect(obj.sum("1,5")).toBe(6);

    });

   
})