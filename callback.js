function explain_callback(name,age,task) {
    console.log('hello', name);
    console.log('your age', age);
    task();
}

    function washhand () {
        console.log("Wash your hand with soap");
    }

    function scrollFacebook () {
        console.log("Sharmin Scrolling Facebook");
    }

    function takeShower () {
        console.log("Take shower");
    }

explain_callback("Naeem", 25, washhand);
explain_callback("Sharmin", 20, scrollFacebook);
explain_callback("Jagir uddin", 31, takeShower);