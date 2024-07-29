const reverseString = function(str1) {
    if(str1 == '') return '';
    let str2 = '';
    let i = str1.length -1;
    while(i>=0){
        str2 += str1[i];
        i--;
    }
    return str2;
};

// Do not edit below this line
module.exports = reverseString;
