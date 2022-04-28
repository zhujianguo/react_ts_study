let value: unknown;
value = true;
value = 2;
value = [];

let value1:unknown = value;
let value2: any = value;
// let value3: boolean = value;

/**
 * 综上可得：
 * 1、一个变量定义为unknown类型后，可以给他赋值其他类型的值
 * 2、一个定义为了确定的类型变量，无法给他重新定义为unkown
 * 
 */
