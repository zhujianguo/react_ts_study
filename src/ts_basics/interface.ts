interface List {
    readonly id: number; // 只读属性,是不可修改的
    name: string;
    age?: number; // 可选属性
}

interface Result {
    data: List[]
}

function render(result: Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name)
        if(value.age){
            console.log("age===",value.age)
        }
    })
}

let result = {
    data: [
        {id:1,name:"a", sex: "男"},
        {id:2,name:"b", age: 12}
    ]
}
// 我们可以绕过TS检测
// 第一种方式：这里通过形参传入绕过了类型检查，sex并不在定义的数据模型之内
// 鸭式变形法
render(result);
// 如果我们直接传入，立刻就会检测出来
// render({
//     data: [
//         {id:1,name:"a", sex: "男"},
//         {id:2,name:"b"}
//     ]
// });
// 第二种方法：还有另外一种绕过类型检测的方式，使用类型断言（as）
render(
    {
        data: [
            {id:1,name:"a", sex: "男"},
            {id:2,name:"b"}
        ]
    } as Result
);
// 等价与下面这种方式，但我们推荐上面的写法
render(<Result>{
        data: [
            {id:1,name:"a", sex: "男"},
            {id:2,name:"b"}
        ]
    }
);

// 第三种方法，使用索引签名
interface Lists {
    ids: number;
    names: string;
    [index:string]: any; // 扩张其他任意属性（使用场景：当你不确定有多少属性的时候，就可以用可索引的签名接口定义数据模型）
};

interface Results {
    datas: Lists[]
};

const cass:Results = {
    datas:[
        {ids:1,names:"c",3:"xiao"},
        {ids:2, names:"d", sex: "男", ss:"ss"}
    ]
}

console.log("ids===",cass.datas[0].ids);
console.log("ids===",cass.datas[0][0]);
console.log("ids===",cass.datas[0][1]);
console.log("ids===",cass.datas[0][3]);
console.log("ids===",cass.datas[0]["ids"]);
console.log("ids===",cass.datas[0]["names"]);

function renders(result: Results){
    result.datas.forEach((value)=>{
        console.log(value.ids,value.names)
    })
}

renders({
    datas:[
        {ids:1,names:"c"},
        {ids:2, names:"d", sex: "男", ss:"ss"}
    ]
});

interface StringArray {
    [index:number]: string;
}

let chars:StringArray = {
    0:"a",1:"b"
}

let ming: StringArray = [
    "a","b"
]

interface ss {
    [index:string]:string;
    [x:number]:string
}

// 函数类型接口的三种方式
// 变量的方式
// let add:(x:number,y:number)=>number 
// 接口的方式
interface Add {
    (x:number,y:number):number
}
// 别名的方式
type Adds = (x:number,y:number)=>number
let add:Adds = (a,b)=>a+b

interface Lib {
    ():void;
    version: string;
    doSomething(): void;
}


function getLib(){
    let lib:Lib = (()=>{}) as Lib;
    lib.version = "1.0";
    lib.doSomething =()=>{};
    return lib;
}

let lib1 = getLib();
//lib1();
lib1.doSomething();


