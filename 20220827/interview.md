## `NodeJS` 如何处理多线程？

`https://juejin.cn/post/6915255619926622222`

## `NodeJS` 有哪些中间件？

`node中间件就是封装在程序中处理http请求的功能。node中间件是在管道中执行。中间件位于客户机/ 服务器的操作系统之上，管理计算机资源和网络通讯。`

`中间件为主要的逻辑业务所服务，可分为：应用级中间件、路由级中间件、内置中间件、第三方中间件、错误级中间件。`

### 1、应用级中间件

`每一个中间件就是调用一个函数，需要配合其他的中间件或者路由使用`

`server (函数) 拦截所有的路由`

`server.use('/reg',函数)；拦截特定的路由`

### 2、内置中间件

`把静态资源文件托管到某一个目录，如果浏览器请求静态资源，则自动到这个目录下查找`

### 3、第三方中间件

`（1）body-parser，将post请求数据解析为对象`
`（2）mysql模块`

## `for...in...` 与 `for...of...` 的区别

### for in

```javascript
//for in 应用于数组
Array.prototype.sayHello = function(){
    console.log("Hello")
}
Array.prototype.str = 'world';
var myArray = [1,2,10,30,100];
myArray.name='数组';

for(let index in myArray){
    console.log(index);
}
//输出结果如下
0,1,2,3,4,name,str,sayHello

//for in  应用于对象中
Object.prototype.sayHello = function(){
    console.log('Hello');
}
Obeject.prototype.str = 'World';
var myObject = {name:'zhangsan',age:100};

for(let index in myObject){
    console.log(index);
}
//输出结果
name,age,str,sayHello
//首先输出的是对象的属性名，再是对象原型中的属性和方法，
//如果不想让其输出原型中的属性和方法，可以使用hasOwnProperty方法进行过滤
for(let index in myObject){
    if(myObject.hasOwnProperty(index)){
        console.log(index)
    }
}
//输出结果为
name,age
//你也可以用Object.keys()方法获取所有的自身可枚举属性组成的数组。
Object.keys(myObject)
```

`可以看出for in 应用于数组循环返回的是数组的下标和数组的属性和原型上的方法和属性，而for in应用于对象循环返回的是对象的属性名和原型中的方法和属性。`

`使用for in 也可以遍历数组，但是会存在以下问题：`

`1.index索引为字符串型数字，不能直接进行几何运算`

`2.遍历顺序有可能不是按照实际数组的内部顺序`

`3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性`

### for of

```javascript
Object.prototype.sayHello = function(){
    console.log('Hello');
}
var myObject = {
    name:'zhangsan',
    age:10
}

for(let key of myObject){
    consoloe.log(key);
}
//输出结果
//typeError

Array.prototype.sayHello = function(){
    console.log("Hello");
}
var myArray = [1,200,3,400,100];
for(let key of myArray){
    console.log(key);
}
//输出结果
1,200,3,400,100
```

`for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。 所以for in更适合遍历对象，不要使用for in遍历数组。`

## `null` 的 `typeof 为 Object`，这是为什么？

null是一种基本数据类型，存储在栈区；而`typeof null`的结果却是`Object`，而`Object`是引用数据类型，存储在堆区。其次，根据代码`alert (person instance of Object)`输出结果为`false`,我们可以知道`null`并不是`Object`的实例，两者之间存在矛盾。

简单来说，  `typeof null`的结果为`Object`的原因是一个bug。在 `javascript` 的最初版本中，使用的 `32` 位系统，`js`为了性能优化，使用低位来存储变量的类型信息。

在判断数据类型时，是根据机器码低位标识来判断的，而`null`的机器码标识为全`0`，而对象的机器码低位标识为`000`。所以`typeof null`的结果被误判为`Object`。

## `symbol` 的使用场景？

symbol 英文意思为 符号、象征、标记、记号，在 js 中更确切的翻译应该为 `独一无二的值`，理解了它的意思之后再看起来就简单多了。

可以通过下面的方式来创建一个 `symbol` 类型的值

```javascript
const s = Symbol();

console.log(typeof s);  // "symbol"
```

### 需要注意的是通过 Symbol 方法创建值的时候不用使用 new 操作符，原因是通过 new 实例化的结果是一个 object 对象，而不是原始类型的 symbol

Symbol 方法接收一个参数，表示对生成的 symbol 值的一种描述

```ini
const s = Symbol('foo');
```

即使是传入相同的参数，生成的 symbol 值也是不相等的，因为 Symbol 本来就是独一无二的意思

```ini
const foo = Symbol('foo');
const bar = Symbol('foo');

console.log(foo === bar); // false
```

Symbol.for 方法可以检测上下文中是否已经存在使用该方法且相同参数创建的 symbol 值，如果存在则返回已经存在的值，如果不存在则新建。

```ini
const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');

console.log(s1 === s2); // true
```

Symbol.keyFor 方法返回一个使用 Symbol.for 方法创建的 symbol 值的 key

```ini
const foo = Symbol.for("foo");
const key = Symbol.keyFor(foo);

console.log(key) // "foo"
```

### 使用场景是什么

1.消除魔法字符

当代码中充斥着大量的魔法字符时，纵使是原开发者在经过一段时间后再回头看也会变得难以理解，更不必说是交由后来开发者维护。

假如现有一个 Tabs 切换的功能

```typescript
if (type === 'basic') {
    return <div>basic tab</div>
}

if (type === 'super') {
    return <div>super tab</div>
}
```

上面代码中字符串 basic、super 就是与业务代码无关的魔法字符，接下来使用 Symbol 对这块代码进行改造

```typescript
const tabTypes = {
    basic: Symbol(),
    super: Symbol(),
}

if (type === tabTypes.basic) {
    return <div>basic tab</div>
}

if (type === tabTypes.super) {
    return <div>super tab</div>
}
```

2.作为对象属性 当一个复杂对象中含有多个属性的时候，很容易将某个属性名覆盖掉，利用 Symbol 值作为属性名可以很好的避免这一现象。

```ini
const name = Symbol('name');
const obj = {
    [name]: 'ClickPaas',
}
```

3.模拟类的私有方法

ES6 中的类是没有 private 关键字来声明类的私有方法和私有变量的，但是我们可以利用 Symbol 的唯一性来模拟。

```scss
const speak = Symbol();
class Person {
    [speak]() {
        ...
    }
}
```
因为使用者无法在外部创建出一个相同的 speak，所以就无法调用该方法

## Ts 中 `never` 是什么意思？使用场景是什么？

在缩小范围时，您可以将联合的选项减少到您已删除所有可能性并且一无所有的程度。 在这些情况下，TypeScript 将使用 never 类型来表示不应该存在的状态。

never 类型可分配给每种类型； 但是，没有类型可以分配给 never（除了 never 本身）。 这意味着您可以使用缩小并依靠从不出现在 switch 语句中进行详尽的检查。

`never` 类型是 TypeScript 中的底层类型。它自然被分配的一些例子：

一个从来不会有返回值的函数（如：如果函数内含有 `while(true) {}`）；
一个总是会抛出错误的函数（如：`function foo() { throw new Error('Not Implemented') }`，`foo` 的返回类型是 `never`）；

## Ts 中 `any` 是什么意思？使用场景是什么？

`any` 泛型，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

## `forEach` 如何终止循环？

### JS 如何终止 forEach 循环 break 报错，return 跳不出循环

`终止 forEach 可以使用 try catch 内部抛出错误，catch 捕获错误。`

```javascript
let arr = [1, 2, 3]
try {
  arr.forEach(item => {
    if (item === 2) {
      throw('循环终止')
    }
    console.log(item)
  })
} catch(e) {
  console.log('e: ', e)
}
```

`还可以使用其它方法:`

1.Array.prototype.some

`当 return true 的时候，会终止遍历`

2.Array.prototype.every

`当 return false 的时候，会终止遍历`

## import 原理 （实际上就是ES6的原理）

1、简单来说就是闭包的运用
2、为了创建Module的内部作用域，会调用一个包装函数
3、包装函数的返回值也就是Module向外公开的API，也就是所有export出去的变量
4、import也就是拿到module导出变量的引用

## import 和 require 的区别
