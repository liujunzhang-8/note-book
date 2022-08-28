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

## `symbol` 的使用场景？

## Ts 中 `never` 是什么意思？使用场景是什么？

## Ts 中 `any` 是什么意思？使用场景是什么？

## `forEach` 如何终止循环？
