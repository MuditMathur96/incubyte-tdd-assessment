export default class Sum{
    constructor(){};

    senatizeInput(input:string){
        
        let str:String=""
        let delimitedStr =""
        if(input[0] === "/" && input[1] === "/"){
             [delimitedStr,str] = input.split("\n");
        }else{
             [delimitedStr,str] = [",",input.replace(/\/n/g, ",")];
        }

        console.log(delimitedStr,str);

        const delimiter = delimitedStr[2] || ",";
        console.log(delimiter);
        return str.split(delimiter)
        .map((s)=>Number(s));
    }

    sum(input:string){
        
        const arr = this.senatizeInput(input);

        return arr.reduce((acc,num)=>acc+num,0);

    }


}