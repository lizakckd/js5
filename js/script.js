"use strict";

//1

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
}
console.log(sum);


//2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] = menu[key] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

//3
let calculator = {
    read() {
        calculator.a = +prompt('введите a');
        calculator.b = +prompt('введите b');
    },
    sum() {
        return calculator.a + calculator.b;
    },
    mul() {
        return calculator.a * calculator.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//4
let str = "$120";
function extractCurrencyValue(str) {
    console.log(str.slice(1));
}
extractCurrencyValue(str);

//5

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(users => users.name);

alert(names); // Вася, Петя, Маша

//6
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
function getAverageAge() {
    let sred = (users.reduce((acc, users) => acc + users.age, 0)) / users.length;
    console.log(sred);
}
getAverageAge(users);
