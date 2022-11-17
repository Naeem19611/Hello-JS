var number = [1,2,5,10,70,33,6,1,33,99,5];
var uniqueName = [];

    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        var index = uniqueName.indexOf(element);
            if(index == -1) {
                uniqueName.push(element);
            }
    }
    console.log(uniqueName);