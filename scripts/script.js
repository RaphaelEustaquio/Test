// alert("Click OK to receive your free PS5!");
// console.log("Hello");

// for (i=1; i <= 1024; i*=2){
//     console.log(i)
// }

// let i = 1;
// while (i < 1024){
//     i = i*2
//     console.log(i)

// }

// let input = "";
// do {
//     input = prompt("What is your name?");

// }
// while(Number.isInteger(Number(input)))
// while (!isNaN(Number(input)))
// alert(`Welcome ${input}`)

// let fruits = ['Apples', 'Banana']

// fruits.push("Orange")

// fruits.unshift("Mango")

// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// for (let item of fruits)
// {
//     console.log(item);
// }

// console.log(fruits)

// fruits.splice(0, 1)

// fruits.shift()

// fruits.pop()

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing']
}

for (let prop in person)
{
    console.log(`My ${prop} is ${person[prop]}`)

} 

// console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}.`)