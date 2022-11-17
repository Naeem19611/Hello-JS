function welcomeGuest (name, greetHandler) {
    greetHandler(name);
}
    const personName = "naeem";
function greetNight (name) {
    console.log('Good Night', name);
}
    welcomeGuest(personName,greetNight);

    welcomeGuest('sakib khan', function(name) {
        console.log('special Welcome', name);
    })