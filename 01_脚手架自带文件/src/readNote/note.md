<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-30 20:14:45
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-15 19:27:02
-->
## 程序员的三门课：技术精进、架构修炼、管理探秘

### 第一章 程序员技能与成长

1.1 如何学习新的编程语言

  1.1.1 重点学什么
    基础知识：
      `基本语法、关键字、变量与常量、数据类型、运算符、流程控制、异常处理、文件处理、编程思想（面向对象、面向过程、函数式编程）、多线程支持等。`
    应用知识：
      `网络请求、数据处理、内置函数、对日志和调试的支持、对单元测试的支持、序列化与反序列化等。`
    高级知识：
      `开源类库、开源框架、底层原理等。`
  
  1.1.2 学习方法
    1. 选择适合自己的编程语言
    2. 选择好的学习方式
    3. 勤加练习
    4. 带着问题学习：5W1H分析法，即What、Who、When、Where、Why及How
    5. 教是最好的学

1.2 代码规范与单元测试
  1.2.1 编码规范
  1.2.2 单元测试（Unit Testing，UT）
  1.2.3 测试驱动设计
    测试驱动设计有3个原则，如下所述：
      `原则1：无测试，不代码。`
      `原则2：单元测试不在多，能够识别出问题即可。`
      `原则3：代码不在多，让当前单元测试全部通过即可。`

1.3 使用静态代码分析工具
  1.3.1 什么是静态代码分析
  1.3.2 静态代码分析工具

1.4 代码审查（Code Review）
  1.4.1 什么是代码审查
  1.4.2 代码审查的好处
  1.4.3 如何做代码审查
    1、要有审查清单
    2、选择高效的工具
    3、重点关注的改动点
    4、代码审查应该是日常性的工作
    5、不要一次审查太多代码
    6、进行一次代码审查的时候不要太长

### 面向对象分析与设计

在面相对象分析与设计的定义中有三个关键词：面向对象，分析，设计。

#### 什么是面向对象

面向对象是计算机编程技术发展到一定阶段后产生的一种软件开发方法，具有抽象、封装、继承、多态等特性，还形成设计原则和设计模式的智慧结晶。

#### 面向对象的特征

1. 封装：指将相关属性和方法重组成一个新的对象，并提供对外访问的接口，对数据的访问或修改只能通过该接口进行。
2. 继承：指某类对象可以继承其他类对象的属性和方法，是一种类之间的层次关系表达。继承有单继承与多继承两种方式：单继承指子类只有一个父类；多继承指子类有一个以上的父类。
3. 多态：指不同的类对象对同一消息做出响应，但同一消息可以根据发送的不同对象进行不同的处理，最终得到不同的执行结果。
4. 抽象：指为了达到某种目的，对涉及的信息和现象进行过滤，将共性元素进行合并，这些元素同时具有独立性和特殊性。抽象也是面向对象分析与设计的基础。

#### 面向对象设计的原则

1. 高内聚：系统中的模块具有高度相关的职责，如果除了这些职责内的任务，没有过多的其他任务，该模块就具有高内聚性，反之具有低内聚性。并且系统中的模块与模块之间有较高的协作性，也就是常说的单一责任原则。
2. 低耦合：耦合指元素与元素之间连接、感知和依赖的程度。这里所说的元素，可以指功能、对象(类)、也可以指系统、子系统、模块。耦合度越低，系统越独立，可扩展性就会越好，所以在设计系统时首先要考虑对元素的划分。
3. 可扩展：用于应对更大规模的业务及软件的成长，通常采用动态加载的插件，回调函数、抽象接口及认真设计的代码结构和类层次结构，使系统在面对不断变化的需求时，其代码不被大量重构开发，比如添加新功能或修改完善现有功能。
4. 可复用：又叫做重用，即重复使用，可以利用已有的代码或者相关模块去实现新的功能需求，实现高效，低成本和高质量。

### 微服务

#### 微服务架构的特点
  1. 独立部署、灵活扩展
  2. 资源的有效隔离
  3. 敏捷的组织结构
    