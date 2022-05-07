interface Human {
    name:string;
    eat():void;
}

// 类实现接口，必须实现接口中所有声明的属性
// 接口只能约束类的公有成员
// 接口也不能约束类的构造函数
class Asian implements Human {
    constructor(name:string){
        this.name = name;
    }
    name: string;
    eat(){};
}

// 接口的继承