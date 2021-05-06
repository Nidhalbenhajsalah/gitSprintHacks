
//2

function factorialOfN(n){
var r=1
while (n>0 ){
r=r*n
n=n-1
}
return (r)
}

//3

function repeatString(string, num) {
   var str=''
while(num>0) {
str=str + string
num=num - 1
}
return str
}

//5
function power(number,exp){
    if (exp ===0){
        return 1;
    }
    return number * power(number,exp-1);
}

//5

function multiplyBy10 (num1,num2){
    return num1*power(10,num2);
    }

  //or 
  function multiplyBy10(num1,num2){
    return num1 * Math.pow(10,num2)
}

//more practice 1

function sunBetween(start, end){
if ( start === end  )
    {return end}
else if (start < end)
   {return end +sunBetween (start,end-1)  }
return sunBetween(end,start)
}

// more practice 2
function inc(x) {
   return x + 1
}  function dec(x) {
   return x - 1
}
function add(number1, number2) {
    return inc(number1) + dec(number2)
}

//more practice 3
function inc(x) {
   return x + 1
}  function dec(x) {
   return x - 1
}
function add(number1, number2) {
    return -(-inc(number1) - dec(number2))
}


//more practice 4

function isEven(number){
    var X = number/2;
    if (Number.isInteger(X)){
        return "is even";
    }
    return "is odd";
}

//more practice 5

function multiply(number1, number2){
    if (number2===0){
        return 0;
    }
    return number1 + multiply(number1, number2-1);
}

//more practice 6

//7


