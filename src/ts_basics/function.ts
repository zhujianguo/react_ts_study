// 函数的定义
function add1(x:number,y:number){
    return x+y;
}

// 以下三种方式只是对函数类型定义，并没有实现
let add2:(x:number,y:number)=>number;

type add3 = (x:number, y:number)=>number;

interface add4 {
    (x:number,y:number):number
}

// 可选参数函数,
// 注意：在可选参数函数中，必须参数不能位于可选参数之后
// “A required parameter cannot follow an optional parameter”
function add5(x:number,y?:number){
    return y?x+y:x;
}

add5(1);

// 默认参数
// 注意：在必选参数之前的默认参数必须传入undefined或者具体值
// 必选参数之后的默认参数可以不传
function add6(x:number,y=0,z:number,q=1){
    return x+y+z+q;
}
// 例如
// 如果y不传undefined，add(1,3)，相当于y传入的是3，z没有传值
add6(1,undefined,3);

// 剩余参数
// 剩余参数的类型是以数组的方式存在的

function add7(x:number, ...rest: number[]){
    return x+rest.reduce((pre,cur)=>pre+cur);
}

console.log(add7(1,2,3,4,5));

// 函数重载

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0];
    if(typeof first === 'string') {
        return rest.join('')
    }
    if(typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
}


