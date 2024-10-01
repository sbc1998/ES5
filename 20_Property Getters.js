const person= {
    fname: "Tim",
    lname: "Bergling",
    age: 25,
    get name() {
        return this.fname.toUpperCase() + " " + this.lname.toUpperCase();
    }
}

console.log(person.name);
