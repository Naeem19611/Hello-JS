var marks = [45,81,55,98,33,23,10];
var max = marks[0];
for(i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max) {
        max = element;
    }
}
console.log('Highest Value is:', max);