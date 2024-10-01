const person= {
    fname: "Tim",
    lname: "Bergling",
    age: 25,
    set setAge(year) {
        let date= new Date();
        this.age= date.getFullYear()-year;
    }
};

person.setAge= 1989;

console.log("Tim is " + person.age + " years old");
