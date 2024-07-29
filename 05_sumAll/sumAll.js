const sumAll = function(num1,num2) {
    let sum = 0;
    if(typeof(num1)!='number' || typeof(num2)!='number' || num1<=0 || num2<=0){
        return "ERROR";
    }
    else if(Number.isInteger(num1) && Number.isInteger(num2)){
        
        let j = Math.max(num1,num2);
        for(let i = Math.min(num1,num2);i<=j;i++){
            sum+=i;
        }
    }
    else{
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
