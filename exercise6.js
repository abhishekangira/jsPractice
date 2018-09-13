//Evaluate these:
//#1

//#2 what is the value of property a for each object.


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(animalType) {
        this.animalType = animalType;
    }
    animalMethod() {
        console.log(`Yayy, I'm a ${this.animalType}`)
    }
}

class Mamal extends Animal {
        constructor(animalType, mamalType) {
            super(animalType);
            this.mamalType = mamalType;
    }
    mamalMethod() {
        console.log(`Wow, I'm a ${this.mamalType}`)
    }
}

class Cow extends Mamal {
    constructor(animalType, mamalType, name, color) {
        super(animalType, mamalType);
        this.name = name;
        this.color = color;
    }
    sound() {
        console.log(`Moo, I'm a ${this.animalType} type animal. But really I'm just a stupid ${this.mamalType}. My name is ${this.name} and I'm ${this.color} in color (pretty fuckking weird if you ask me) :)`)
    }
}

const cow1 = new Cow('Mamal', 'Cow', 'Shaardaa', 'Green');
cow1.animalMethod();
cow1.mamalMethod();
cow1.sound();