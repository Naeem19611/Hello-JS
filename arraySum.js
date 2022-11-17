function getArraySum (numbers) {
    var sum = 0;

    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [12,29,20,99,14,24,35,65,90];
var result = getArraySum(numbers);
    console.log('Total amount:', result);
var total = getArraySum([22,40,30,88,90,50]);
    console.log('Total amount:', total);