console.log('\nnumber 16');
class Human{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo(){
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstName () {
        return this.name;
    }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];
for (let i = 0; i < humans.length; i++) {
    console.log(humans[i].getInfo());
}
for (let i = 0; i < humans.length; i++) {
    console.log(humans[i].firstName);
}