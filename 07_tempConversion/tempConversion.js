const convertToCelsius = function(temp) {
    let ans = ((temp-32)/9)*5;
    if(Number.isInteger(ans)) return ans;
    return parseFloat(ans.toFixed(1));
};

const convertToFahrenheit = function(temp) {
    let ans = (((temp/5)*9)+32);
    if(Number.isInteger(ans)) return ans;
    return parseFloat(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
