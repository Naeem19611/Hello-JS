var speech = "I  am a good person. i  dont snore at night";
var count = 0;
for (var i = 0; i < length.speech; i++) {
    var char = speech[i];
    if(char == " " && speech[i-1] !="") {  //This && use for extra white space dont count this code.
        count++;
    }
}
console.log(count);