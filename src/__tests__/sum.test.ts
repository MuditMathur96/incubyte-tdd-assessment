import Sum from "../sum";
describe("Test sum function",()=>{
    let obj:Sum;
    beforeAll(()=>{

        obj = new Sum();

    });

    
    test("test with comma separated strings",()=>{
        expect(obj.add("")).toBe(0);
        expect(obj.add("1")).toBe(1);

        expect(obj.add("1,5")).toBe(6);

    });

    test("test with line break separated string",()=>{
        expect(obj.add("1/n2,3")).toBe(6);
    });

    test("test with configurable delimiter",()=>{
        expect(obj.add("//;\n1;2" )).toBe(3);
    });

    test("test with negative number",()=>{
       
        expect(()=>obj.add("1,2,-1,3")).toThrow("negative numbers not allowed -1");
        expect(()=>obj.add("1,2,-1,3,-2")).toThrow("negative numbers not allowed -1,-2");
      
    });

    test("test with number more than 1000",()=>{
       
        expect(obj.add("2,1001")).toBe(2);
      
    });

   
})