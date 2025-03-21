import Sum from "../sum";
describe("Test sum function",()=>{
    let obj:Sum;
    beforeAll(()=>{

        obj = new Sum();

    });

    
    test("test with comma separated strings",()=>{
        expect(obj.sum("")).toBe(0);
        expect(obj.sum("1")).toBe(1);

        expect(obj.sum("1,5")).toBe(6);

    });

    test("test with line break separated string",()=>{
        expect(obj.sum("1/n2,3")).toBe(6);
    })

   
})