type say = (age: number) => string;
/*这里的say是约束says方法的入参的和返回值，
也可以理解是says方法的定义已经定义在之前就定义好了
*/
const says: say = function (age: number): string {
  return age.toString();
};
console.log("====",says(222));

type EventNames = 'click'|'scroll'|'mousemove';
function handleEvent( event:EventNames){
  console.log('1111===',event);
}

handleEvent('scroll');

type Point = {
  x:number;
  aaa: (str:string) =>string;
}

class P1 implements Point {
  x: number;
  constructor(x:number){
    this.x = x;
  }
  aaa(str: string):string{
    return str;
  };

}

interface name {
  a:string;
  aaa: (ss:string)=>void;
}

class myName implements name {
  a: string;
  constructor(a:string) {
    this.a = a;
  }
 aaa(ss: string):void{
   console.log("ss",ss);
 };

}
