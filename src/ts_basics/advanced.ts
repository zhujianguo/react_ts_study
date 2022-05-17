// 类型推断
// 基础类型推断

// 以下是从右往左推断，根据表达式的值推断数据类型
let a = 1; // 这里会被自动推断为number类型
let b = [1]; // 被推断为number数组
let c = (x=1) => x+1; 

// 从左到右的类型推断
window.onkeydown = (event) => {
    console.log(event.altKey);
}

interface Foos {
    bar:number
}
// as 类型断言的一种方式，这种方式会有一个问题，就是Foos是必要参数，结果下面这段代码不报错
let foo = {} as Foos;
// foo.bar=1;
// 针对上面的问题，我们可以这样改造,此时会报错
// let foos: Foos = {};

// ================================================
/**
 * 类型兼容性
 * 当一个类型Y可以被赋值给另外一个类型小时，我们就可以说类型X兼容类型Y
 * X兼容Y:X(目标类型) = Y（源类型）
 *
 */

/**
 * 修改tsconfig.json中的配置strictNullChecks，为 "strictNullChecks": false, 
 * 则null可赋值给string类型，代表null是string的子类型      
 */

let s:string = 'a';
s=null;

// 接口兼容性
/**
 * 只要Y包含X所有类型，则Y可以赋值给X类型，X不包含Y的所有类型，则X不能兼容Y
 */

interface X  {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let x:X = {a:1,b:2};
let y:Y = {a:1,b:2, c:3};

x = y;

 // 函数兼容性

 type Handler = (a:number, b:number)=>void
 function hof(handler:Handler){
     return handler;
 }

 // 参数个数
 let handler1 = (a:number) => {};
 hof(handler1)
 let handler2 = (a:number, b: number,c:number)=>{}
 // 声明传入的函数参数个数多余函数的定义个数
 // hof(handler2);

 /**
  * 可选参数和剩余参数
  *  修改tsconfig.json中的配置strictNullChecks，为 "strictFunctionTypes": false,
  * 则null可赋值给string类型，代表null是string的子类型      
  */
let aa = (p1:number,p2:number)=>{};
let bb= (p1?:number,p2?:number)=>{};
let cc = (...args: number[])=>{};
aa=bb;
aa=cc;
bb=cc;
bb=aa;
