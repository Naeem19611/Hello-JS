/*var student = { id:1200, name:"naeem", address:"khilgaon", phone:0186};
var student2 = { id:200, name:"mizan", address:"banasree", phone:0170};
student2.phone = 98383;
student.cinema = "poran2";
console.log(student);
console.log(student2);

function inchToFeet (inch) {
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

function isLeapYear (year) {
    let remainder = year % 4;
      if (remainder == 0) {
        return true;
    } else {
        return false;
    }
    }*/
  
// iterative system
   function factorial (n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;  
    }
    return factorial;
   }
   var result = factorial(10);
   console.log(result);