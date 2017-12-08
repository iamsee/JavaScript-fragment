/*
*   @ 继承方法封装
*   @ 参数一：子对象
*   @ 参数二：父对象        
*/

function extend( Child, Parent ) {
    //定义一个空对象
    var foo = function(){};
    foo.prototype = Parent.prototype;
    //将Child的原型指向foo的实例对象
    Child.prototype = new foo();
    //将Child的construtor指向自己
    Child.prototype.constructor = Child;
    //为子对象设一个uber属性，这个属性直接指向父对象的prototype属性
    Child.uber = Parent;
}