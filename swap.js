var a = 7;
var b = 5;
console.log("before swap: a=", a, "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, "b=", b);

var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("after swap: p=", p, "q=", q);

var male = "naeem";
var female = "sharmin";
[male,female] = [female,male];
console.log("After Swap: male=", male, "female=", female);