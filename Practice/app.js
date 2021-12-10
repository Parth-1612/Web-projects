// //object.prototype
// //Person.prototype

// function Person(firstName,LastName)
// {
// this.firstName=firstName;
// this.LastName=LastName;
// }


// Person.prototype.greeting=function(){
//     return `Hello there ${this.firstName} ${this.LastName}`;
// }

// const per=new Person('JOHN','doe');
// // console.log(per.greeting());

// function Cus(f,l,p,m)
// {
//     Person.call(this,f,l);
//     this.phone=p;
//     this.mem=m;
// }

// //Inherit

// Cus.prototype=Object.create(Person.prototype);
// //make customer.prototype return customer

// Cus.prototype.constructor=Cus;

// const cus=new Cus('tom','smith','55-43-434-434','stand');
// console.log(cus);
// //Customer.protype
// Cus.prototype.greeting=function()
// {
//     return `Hello there`
// }

// console.log(cus.greeting());
// console.log(per.greeting())



// const Person={

//     greeting: function(){
//         return `Hello`
//     }
// }

// const mar=Object.create(Person);
// console.log(mar.greeting());

class Person{

    constructor(firstName,Lastname)
    {
this.Lastname=Lastname;
this.firstName=firstName;
    }
}
const mar=new Person('parth','patel')
console.log(mar)