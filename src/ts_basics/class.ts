class Dog {
  //私有化构造函数的类即不能被实例化，也不能继承
//  private constructor(name:string){
//     this.name = name;
//   }
// 私有化构造函数的类即不能被实例化，也不能继承
//  private constructor(name:string){
//     this.name = name;
//   }
    // constructor(name:string){
    //   this.name = name;
    // }

    // 构造函数的参数也能添加修饰符,它的作用就是直接变成实例化属性了，可以不用再声明此属性了
    constructor(public name:string){
      this.name = name;
    }

  // public  name: string= "dog";
    run(){};
    // 私有成员只能被类的本身调用，不能被类的实例和子类调用
  private pri() {};

  // 受保护成员，只能在类和子类中访问，不能在类的实例中访问
  protected pro() {};

  // 只读属性,是不能被更改的，而且必须初始化
readonly legs:number = 4;

// static修饰符,类的静态成员，只能通过类或子类访问，不能通过实例调用
static food: string = "bones";
}


// 1.无论在TS中还是JS中，类成员的属性都是“实例”属性，而不是“原型”属性，类成员方法都是“原型”方法
// 打印类原型
console.log(Dog.prototype);

// 打印类的实例
let dog = new Dog('wangwang');
console.log(dog);

 class Husky extends Dog {
  constructor(name:string, color: string){
    super(name);
    this.color = color;
  }
  color: string
}
