export default class Sum{
    constructor(){};

    senatizeInput(input:string){
        return input.
        split(",")
        .map((s)=>Number(s));
    }

    sum(input:string){
        
        const arr = this.senatizeInput(input);

        return arr.reduce((acc,num)=>acc+num,0);

    }


}