String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'
name.giveLydiaPizza()

// 输出 'Just give Lydia pizza already!'

const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 123
a[c] = 456

console.log(a[b]);

// 对象的键被自动转换为字符串 当字符串化一个对象时，它会变成 "[object Object]" 输出 456

0
new Number(0)
('')
(' ')
new Boolean(false)
undefined

// falsy 只有6种值：undefined null NaN 0 ‘’(empty string) false Function 构造函数，比如 new Number 和 new Boolean，是 truthy

console.log(typeof typeof 1)

// 输出 string

const numbers = [1,2,3]
numbers[10] = 11
console.log(numbers);

// 输出 [1, 2, 3, 7 x empty, 11] 当你为数组设置超过数组长度的值的时候， JavaScript 会创建名为 "empty slots" 的东西。它们的值实际上是 undefined

(() => {
  let x, y
  try {
    throw new Error()
  } catch(x) {
    (x=1),(y=2)
    console.log(x);
  }
  console.log(x);
  console.log(y);
})()

// 输出 1 undefined 2

function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10)

console.log(gen.next().value);
console.log(gen.next().value)

// 输出 10 20

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
})

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
})

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// 输出 two 当我们向Promise.race方法中传入多个Promise时，会进行 优先 解析。

const person = {
  name: "Lydia",
  age: 21
};

for(const item in person) {
  console.log(item);
}

// 输出 name age 在for-in循环中,我们可以通过对象的key来进行迭代 在底层，对象的key都是字符串（如果他们不是Symbol的话）

const num = parseInt("7*6", 10) // 第二个参数解析数字是什么进制

// 输出 7 parseInt 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符

[1,2,3].map(num => {
  if(typeof num === "number") return;
  return num * 2;
})

// 输出 [undefined, undefined, undefined] map函数创建了新数组并且将函数的返回值插入数组

function getInfo(member, year) {
  member.name = "Lydia";
  year = '1998';
}

const person1 = {name: "Sarah"};
const birthYear = "1997";

getInfo(person1, birthYear);

console.log(person, birthYear);

// 输出 { name: "Lydia" }, "1997" 普通参数都是 值 传递的，而对象则不同，是 引用 传递

function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

// 输出 Oh no an error: Hello world!  通过throw语句，我们可以创建自定义错误。 而通过它，我们可以抛出异常。异常可以是一个<b>字符串</b>, 一个 <b>数字</b>, 一个 <b>布尔类型</b> 或者是一个 <b>对象</b>。

function Car() {
  this.make = "Lamborghini";
  return {make: "Maserati"};
}

const myCar = new Car();
console.log(myCar.make);

// 输出 Maserati 返回属性的时候，属性的值等于 返回的 值，而不是构造函数中设定的值

(() => {
  // y = 10 相当于 window.y = 10 相当于全局变量，随处可以调用
  // let x = y
  let x = (y = 10)  // let 只作用于块级作用域内，外部无法调用
})() // 立即调用表达式(IIFE)

console.log(typeof x);
console.log(typeof y);

// 输出 "undefined" "number"

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log("Woof I am ${this.name}");
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();

// 输出 Woof I am Mara", TypeError   可以用delete关键字删除对象的属性，对原型也是适用的。删除了原型的属性后，该属性在原型链上就不可用了  当我们尝试调用一个不存在的函数时TypeError异常会被抛出

const set = new Set([1,1,2,3,4]);

console.log(set);

// 输出 {1, 2, 3, 4} Set对象是独一无二的值的集合：也就是说同一个值在其中仅出现一次

const name1 = "Lydia";
age = 21;

console.log(delete name1);
console.log(delete age);

// 输出 false true  delete操作符返回一个布尔值： true指删除成功，否则返回false. 但是通过 var, const 或 let 关键字声明的变量无法用 delete 操作符来删除

const user = {name: 'Lydia', age: 21};
const admin = {admin: true, ...user};

console.log(admin);

// 输出 { admin: true, name: "Lydia", age: 21 } 扩展运算符...为对象的组合提供了可能。你可以复制对象中的键值对，然后把它们加到另一个对象里去

const person2 = {name: "Lydia"}

Object.defineProperty(person2, "age", {value: 21});

console.log(person);
console.log(Object.keys(person));

// 输出 { name: "Lydia", age: 21 }, ["name"]
// 通过defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性
// 而我们使用defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). Object.keys方法仅返回对象中 可枚举(enumerable) 的属性

const settings = {
  username: "Iydiahallie",
  level: 19,
  health: 90
}

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// 输出 "{"level":19, "health":90}"
// JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串
// 如果替代者(replacer)是个 数组 ，那么就只有包含在数组中的属性将会被转化为字符串
// 而如果替代者(replacer)是个 函数，这个函数将被对象的每个属性都调用一遍。 函数返回的值会成为这个属性的值，最终体现在转化后的JSON字符串中
// Chrome下，经过实验，如果所有属性均返回同一个值的时候有异常，会直接将返回值作为结果输出而不会输出JSON字符串，而如果返回值为undefined，则该属性会被排除在外。

let Num = 10;

const increaseNumber = () => Num++; // 10
const increasePassedNumber = number => number++; // 10

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 输出 10 10  一元操作符 ++ 先返回 操作值, 再累加 操作值

const value = {number: 10};

const multiply = (x = {...value}) => {
  console.log(x.number *= 2); // *=运算符实际上是x.number = x.number * 2的简写
};

multiply();
multiply();
multiply(value);
multiply(value);

// 输出 20, 20, 20, 40
// 在ES6中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 "undefined" ，那么参数的值将是默认值

[1,2,3,4].reduce((x, y) => console.log(x, y)) // 累加器为1 当前值为2 默认返回值为 undefined

// 输出 1 2 and undefined 3 and undefined 4
// reducer 函数接收4个参数:
// 1、Accumulator (acc) (累计器)
// 2、Current Value (cur) (当前值)
// 3、Current Index (idx) (当前索引)
// 4、Source Array (src) (源数组) 
// reducer 函数的返回值将会分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。 
// reducer 函数还有一个可选参数initialValue, 该参数将作为第一次调用回调函数时的第一个参数的值。如果没有提供initialValue，则将使用数组中的第一个元素。

class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;  // 抛出一个ReferenceError
  }
  // 2
  constructor(name, size) { // name 继承属性 size 额外属性
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;  // 抛出一个ReferenceError
    this.size = size;
  }

};

// 成功继承 Dog 类的为 2
// 在子类中，在调用super之前不能访问到this关键字

// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

// 输出 running sum.js, running index.js, 3
// import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。这是CommonJS中require（）和import之间的区别
// 使用require()，您可以在运行代码时根据需要加载依赖项。 如果我们使用require而不是import，running index.js，running sum.js，3会被依次打印
import { sum } from './output';

console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))

// 输出 true, true, false  每个Symbol都是完全唯一的。传递给Symbol的参数只是给Symbol的一个描述。 Symbol的值不依赖于传递的参数

const name3 = "Lydia Hallie"
console.log(name3.padStart(13))
console.log(name3.padStart(2))

// 输出 " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
// 使用padStart方法，我们可以在字符串的开头添加填充。传递给此方法的参数是字符串的总长度（包含填充）
// 字符串Lydia Hallie的长度为12, 因此name.padStart（13）在字符串的开头只会插入1（13 - 12 = 1）个空格。 
// 如果传递给padStart方法的参数小于字符串的长度，则不会添加填充。

function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️

// 输出 game.next().value and game.next("Yes").value  generator函数在遇到yield关键字时会“暂停”其执行

console.log(String.raw`Hello\nworld`);

// 输出 Hello\nworld  String.raw函数是用来获取一个模板字符串的原始字符串的，它返回一个字符串，其中忽略了转义符（\n，\v，\t等）

async function getData() {
  return await Promise.resolve("I made it!");
}

const data1 = getData();
console.log(data1);

// 输出 Promise {<pending>}
// 异步函数始终返回一个promise。
// await仍然需要等待promise的解决：当我们调用getData()并将其赋值给data，此时data1为getData方法返回的一个挂起的promise，该promise并没有解决。 
// 如果我们想要访问已解决的值"I made it!"，可以在data1上使用.then()方法： data1.then(res => console.log(res)) 这样将打印 "I made it!"

function addToList(item, list) {
  return list.push(item); // push 返回新数组的长度
}

const result = addToList("apple", ["banana"]);
console.log(result);

// 输出 2 push()方法返回新数组的长度
// push方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在push item之后返回list。

const box = { x: 10, y: 20 };

Object.freeze(box); // Object.freeze使得无法添加、删除或修改对象的属性（除非属性的值是另一个对象)

const shape = box; // shape指向的也是冻结对象box
shape.x = 100;
console.log(shape)

// 输出 { x: 10, y: 20 }
// 可以使用Object.isFrozen检查一个对象是否被冻结，上述情况，Object.isFrozen（shape）将返回true。
// 注意，上述例子我们对属性x进行修改，可能会导致抛出TypeError异常（最常见但不仅限于严格模式下时）。

const { name: myName } = { name: "Lydia" }; // 

console.log(name); // name 未定义的变量

// 输出 ReferenceError 

const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) { // 通过for-in循环，我们可以遍历一个对象自有的、继承的、可枚举的、非Symbol的属性
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}

// 输出 0 1 2 3 and "☕" "💻" "🍷" "🍫"

var status = "😎"

setTimeout(() => {
    const status = "😍"

    const data = {
        status: "🥑",
        getStatus() {
            return this.status
        }
    }

    console.log(data.getStatus()) // this指向的就是data对象。 当我们打印this.status时，data对象的status属性被打印，即"🥑"
    console.log(data.getStatus.call(this)) // 将this的指向由data对象更改为全局对象
}, 0)

// 输出 "🥑" and "😎" this关键字的指向取决于使用它的位置  使用call方法，可以更改this指向的对象

const person = {
    name: "Lydia",
    age: 21
}

let city = person.city /** undefined */
city = "Amsterdam" // 这不会更改person对象：没有对该对象的引用

console.log(person)

// 输出 { name: "Lydia", age: 21 }

function checkAge(age) {
    if (age < 18) {
        const message = "Sorry, you're too young."
    } else {
        const message = "Yay! You're old enough!"
    }

    return message /** 由于块级作用域，我们无法在声明的块之外引用变量，因此抛出ReferenceError。 */
}

console.log(checkAge(21))

// 输出 ReferenceError const和let声明的变量是具有块级作用域的，块是大括号（{}）之间的任何东西, 即上述情况if / else语句的花括号。 

fetch('https://www.website.com/api/user/1')
    .then(res => res.json())
    .then(res => console.log(res)) /** 第二个.then中res的值等于前一个.then中的回调函数返回的值 */

// 输出 前一个.then()中回调方法返回的结果  你可以像这样继续链接.then，将值传递给下一个处理程序

function getName(name) {
    const hasName = //
}

// !!name 使用逻辑非运算符!，将返回一个布尔值，使用!! name，我们可以确定name的值是真的还是假的

console.log("I want pizza"[0]) /**  请注意，IE7及更低版本不支持此方法。 在这种情况下，应该使用.charAt（） */

// 输出 "I" 可以使用方括号表示法获取字符串中特定索引的字符，字符串中的第一个字符具有索引0，依此类推

// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module" /** 使用import * as name语法，我们将module.js文件中所有export导入到index.js文件中，并且创建了一个名为data的新对象 */

console.log(data)

// { default: function default(), name: "Lydia" }

class Person {
    constructor(name) {
        this.name = name
    }
}

const member = new Person("John")
console.log(typeof member)

// 输出 "object" 类是构造函数的语法糖，如果用构造函数的方式来重写Person类则将是：
function Person() {
    this.name = name
}
// 通过new来调用构造函数，将会生成构造函数Person的实例，对实例执行typeof关键字将返回"object"，上述情况打印出"object"。

let newList = [1, 2, 3].push(4) /** newList等于数组的新长度：4 */

console.log(newList.push(5)) /** 尝试在newList上使用.push方法。 由于newList是数值4，抛出TypeError。 */

// Error .push方法返回数组的长度，而不是数组本身！