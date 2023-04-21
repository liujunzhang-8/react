<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 11:50:57
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-22 11:16:36
-->
### react中定义组件

复习类相关知识
  ```js
  class Person {
    // 构造器方法
    constructor(name, age) {
      // 构造器中的this是谁？—— 类的实例对象
      this.name = name
      this.age = age
    }
    // 类中是可以直接写赋值语句的

    // 一般方法
    speak() {
      // speak方法放在哪里？——类的原型对象上，供实例使用
      // 通过Person实例调用speak时，speak中的this就是Person实例
      console.log(`我叫${this.name}, 我年龄是${this.age}`);
    }
  }

  // 创建一个student类，继承于Person类
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age)
      this.grade = grade
    }
    // 重写从父类继承过来的方法
    speak() {
      console.log(`我叫${this.name}, 我年龄是${this.age}, 我读的是${this.grade}年级`);
    }
    study() {
      // study方法放在了哪里？——类的原型对象上，供实例使用
      // 通过Student实例调用study时，study中的this就是Student实例
      console.log('我很努力的学习');
    }
  }
  // 创建一个Person实例对象
  const s1 = new Student('tom', 18, '高三')
  console.log(s1);
  s1.speak()
  s1.study()
  ```

  总结：
    1. 类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
    2. 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
    3. 类中所定义的方法，都是放在了类的原型对象上，供实例去使用。