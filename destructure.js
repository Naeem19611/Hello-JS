const person = {name : "naeem", age : 25, college : "IST", address : "Khilgaon", phone : 01863826338, job : "Developer", friends : ["mim", "arafat"], gfName : "Nan"};

 const { phone, gfName, age } = person;

const complexObject = {
    name: "abc",
    info = {
        address: "kola Bagan",
        leader: "Tiger Leader"
    }
}

const (leader) = complexObject.info;
console.log(info);


// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, age);
// console.log(gfName, phone, age);
// console.log(gfName, phone, age);
// console.log(gfName, phone, age);

// For Array Destructure
const friends = ["sakib khan", "salman Khan", "amir Khan", "sarukh khan"];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);