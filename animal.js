function animalCalculator (depth) {

var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
            var first10Mile = 10 * 50;
            var remaining = depth - 10;
            var secondPart = remaining * 100;
            animal = first10Mile + secondPart;
    } else {
        var first10Mile = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = first10Mile + secondPart + thirdPart;
    }
    return animal;
}
var count = animalCalculator(32);
console.log(count);