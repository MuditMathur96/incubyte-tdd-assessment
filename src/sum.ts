export default class Sum{
    constructor(){};

    checkForNegative(input:number[]){
        let message = "negative numbers not allowed ";
        let hasNegNum = false;
        input.forEach((num)=>{
            if(num<0){
                if(hasNegNum) {
                    message = message.concat(",",""+num)
                }else{
                    hasNegNum =true;
                    message = message.concat(num+"");
                }
                
            };
            

        });

        console.log(message);
        if(hasNegNum) throw new Error(message);
    }

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

    add(input:string){
        
        const arr = this.senatizeInput(input);

        this.checkForNegative(arr);

        return arr.reduce((acc,num)=>acc+num,0);

    }


}