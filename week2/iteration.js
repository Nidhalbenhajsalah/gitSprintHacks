//1
function sumOfn(n){
 	var result = 0
 	while(n>0){
 		result = result + n
 		n = n - 1
 	}
 	return result
 }

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

//4

function countMinMax(min, max) {
   while (max<min) {
return ( min-max )
}
return (max-min)
}

//5
function sumMinToMax(min, max) {
   var r=0
while (max>min){
r=r + min
min = min +1
}
return r
}

//6

function productMinToMax(min, max) {
   var r=1
while (max>min) {
r=r*min
min=min+1
}
return r
}

//7
function productMinToMax(min,max){
    var res = 1
    while (min<max){
     res = res*min;
     min++; 
    }
    return res;
    }

    // 
    function multiplyBy10NTimes(num,n){
    var res = 1;
    while(n>0){
        res = res*10;
        n=n-1;
    }
    return res*num;
    }
    //8
    function countCharAtIndex(string1, index, string2) {
   var i=0;
   var res =0;
   while(i<string2.length){
       if (string1.charAt(index)===string2.charAt(i)){
           res++;
       }
       i++
   }
   return res;
}

//more practice 1

function reversedString(string) {
   var i = string.length-1;
   var reversed ='';
   while(i>=0){
    reversed = reversed +string.charAt(i);
    i--;
   }
   return reversed; 
}

//Advanced 1

function getIndexOf(string, char) {
   var i=0;
   while(i<string.length){
    if (string.charAt(i)===char){
        return i;
    }
    i++;
   }
} 