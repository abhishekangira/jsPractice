class Sorrow {
    constructor(type, amt, cause) {
        this.type = type;
        this.amt = amt;
        this.cause = cause;
    }
}

let s1 = new Sorrow('Life Threatening', 'over 1000', 'Losing her...');
console.log(`Diagnosis Result:
This is a ${s1.type} sorrow, with a level ${s1.amt} becasue of ${s1.cause}`);