const repeatString = function(str1,num1) {
    if(num1<0) return "ERROR";
    let str2 = '';
    for(let i = 0;i<num1;i++){
        str2 += str1;
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
