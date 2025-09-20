function add(a: number, b: number): number
{
    return a + b;

}

console.log (add(543, 234));

const add2 = function add(a: number, b: number): number

{
    return a + b;
}

console.log (add2(645,838));

// i want to create const variable which will give me date month 
const today:Date= new Date();

const dates={
    day:today.getDate (),
    month:today.getMonth(),
    year: today.getFullYear (),
    random: Date.now(),
    name: "testuser",
    domain: "@gmail.com",
    englishDate : function (): string {
        return `${this.day}/${this.month}/${this.year}`
    },
    email : function(): string {
        return `${this.name}${this.random}${this.domain}`
    }

}

console.log(dates.email());

class Student {

    name: "test";
    age: 22;

    print ()
    {

        console.log(`hello ${this.name} ${this.age}`);
    }
    
}

const s=new Student ();
s.print();