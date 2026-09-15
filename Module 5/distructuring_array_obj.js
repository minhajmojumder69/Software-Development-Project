const person = {
    name : 'minhaj',
    age: 21,
    friends : ['sami','mahi','nafish','nafisha','fahim']
}

const {age,name,friends} = person;   // distructuring obj
console.log(age);

const array = ['minhaj','mahi','farabi','nafsee'];   // distructuring array
const [a,b,c,d] = array;            // it will distruct value serially

console.log(d);


// arrow functions //
const sum = (num1,num2) => num1 + num2
const output = sum(10,34);
console.log(output);