function add (number1, number2) {
    var total = number1 + number2;
    return total;
}
var result1 = add(55,65);
console.log(result1);
console.log('Not adding this time');
console.log('Not eating right now');
var result2 = add(99,55);
console.log(result2);

function largestNumber (numbers) {
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if(element > larger) {
            larger = element;
        }
    }
    return larger;
}

var output = largestNumber ([45,66,78,90]);
console.log('output:', output);