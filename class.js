class Student {
    constructor (sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school";
    }
}
const student1 = new student(22, "naeem");
const student2 = new student(30, "mahi");
const student3 = new student(44, "abir");

console.log(student1,student2,student3);