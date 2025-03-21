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

        
        if(hasNegNum) throw new Error(message);
    }

    senatizeInput(input:string){
        
        let str:String=""
        let delimitedStr =""
        let seperators = [",","\n"];
        if(input[0] === "/" && input[1] === "/"){
             [delimitedStr,str] = input.split("\n");
             const customSeparatorMatch = input.match(/^\/\/(\[.*\])\n/);
             if(customSeparatorMatch){
                 console.log("custom match:",customSeparatorMatch![1]);   
                 seperators = customSeparatorMatch[1]
                 .match(/\[.*?\]/g)?.map(s => s.slice(1, -1)) || [customSeparatorMatch[1]];
               input = input.slice(customSeparatorMatch[0].length); // Remove delimiter definition
              
             }else{
                seperators = [delimitedStr[2]];
             }
             console.log(seperators);
             
        }else{
             [delimitedStr,str] = [",",input.replace(/\/n/g, ",")];
             
        }

        //console.log("delimter",delimitedStr,str,seperators);

      //  const delimiter = delimitedStr[2] || ",";
        //.log("",delimiter);
        return str.split(new RegExp(seperators.map(s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|"), "g"))
        .map((s)=>Number(s));
    }

    add(input:string){
        
        const arr = this.senatizeInput(input);

        this.checkForNegative(arr);

        return arr.reduce((acc,num)=>num<=1000?acc+num:acc,0);

    }


}

