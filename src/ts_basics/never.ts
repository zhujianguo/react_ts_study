/**
 * 在TypeScript中，
 * 可以利用never类型的特性来实现全面性检查，具体示例如下：
 */
type Foo = string | number;
let aaa = "222";

(function controlFlowAnalysisWithNever(foo:Foo){
    if(typeof foo === 'string'){
        console.log("1111====",typeof foo === 'string');
    }else if(typeof foo === "number"){
        console.log("2222====",typeof foo === 'number');
    }else {
        const check: never = foo;
        console.log("check===",check);
    }
})(aaa);