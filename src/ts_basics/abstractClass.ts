// 抽象类，不能被实例化，只能被继承
// 子类继承抽象类的方法
// 子类必须实现父类中的抽象方法
abstract class Animal {
    eat(){
        console.log("eat");
    }

    abstract sleep(): void;
}

 class Dogs extends Animal {
constructor(){
    super();
}
sleep(){
console.log("Dogs");
}
}
// 子类继承了父类的方法
let dogs = new Dogs();
dogs.eat();

class Cat extends Animal {
    sleep(){
        console.log('Cat sleep');
    }
}
let cat = new Cat();
// 多态
let animal: Animal[] = [cat,dogs];
animal.forEach(i=>{
    i.sleep()
})