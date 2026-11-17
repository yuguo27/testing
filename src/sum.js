export function sum(a, b) {
  return a + b;
}

String.prototype.isAlphaNumeric = function() {
  var regExp = /^[A-Za-z0-9]+$/;
  return (this.match(regExp));
};

export function capitalize(arg){
  if (arg.isAlphaNumeric()){
    let charCode = String.fromCharCode(arg[0].charCodeAt(0)-32);
    let newString  = charCode + arg.slice(1);
    return newString;
  }
  else{
    return arg;
  }

}

export function reverseString (string) {
  return string.split("").reverse().join("");
};


export function Calculator(){
  this.add = (a,b) => {
    return a+b;
  }
  this.substract = (a,b) => {
    return a-b;
  }
  this.multiply = (a,b) => {
    return a*b;
  }
  this.divide= (a,b) => {
    return a/b;
  }
}
export function caesar(string, shift) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);


    if (code >= 97 && code <= 122) {
      let shifted = ((code - 97 + shift) % 26) + 97;
      newString += String.fromCharCode(shifted);
    }

    else if (code >= 65 && code <= 90) {
      let shifted = ((code - 65 + shift) % 26) + 65;
      newString += String.fromCharCode(shifted);
    } 

    else {
      newString += string[i];
    }
  }

  return newString;
}

export function analyzeArray(array){
  const average = array.reduce((a,b) => ((a+b)))/array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const length = array.length;
  return {
    "average": average, 
    "max": max, 
    "min": min, 
    "length": length
  };
}

