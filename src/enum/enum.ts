
// 数字枚举
/**
 * 数字枚举默认初始值是0，后面依次递增
 * 如果中间修改某个值的默认值，那么从这个值开始，后面的都是基于上一个值递增
 * 例如如下，修改Developer默认值，那么后面依次是4，5，6，7
 */
enum Role {
    Reporter,
    Developer=4,
    Maintainer,
    Owner,
    Guest
}

console.log("Role====",Role);
console.log("Role.Reporter====",Role.Reporter);
console.log("Role.Reporter====",Role["Reporter"]);
console.log("Role.Reporter====",Role[4]);
// 字符串枚举
/**
 * 字符串枚举是不能像数字枚举一样反向映射的，它只能用成员名称作为key,例如只能通过Message.Success访问
 */
enum Message {
    Success = "恭喜你，成功了",
    Fail = "抱歉，失败了",
}

console.log("Message.Success",Message.Success);
console.log("Message.Success",Message["Success"]);

enum Char {
    a,
    b=Char.a,
    c=1+3,
    d=Math.random(),
    e="123".length
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}
// 使用场景，当我们不需要对象，需要对象值的时候
let month = [Month.Jan,Month.Feb,Month.Mar]

// 枚举类型
enum E {a,b};
enum F {a=0,b=0};
let e:E = 3;
let f:F = 3;
let e1: E.a = 1;
let e2: E.b = 2;
// e1==e2;
let e3: E.a = 2;
e1===e3;
