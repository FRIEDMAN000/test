function app1() {
var name1 = document.getElementById("name").value;
var year1 = document.getElementById("year").value;
class Human { 
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let person1 = new Human(name1,year1);
document.getElementById("age").innerHTML = "Hello " + name1 +" your age is "+person1.age();
 }