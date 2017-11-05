---
layout:     post
title:      "《Effective Java》读书笔记(一)"
subtitle:   "Reading notes of <Effective Java> (1)"
date:       2017-11-03
author:     "fgksgf"
header-img: "img/articles/lib.jpg"
catalog: true
tags:
    - ReadingNotes
---

# Chapter 1-Creating and Destroying Objects



## Item 1:考虑用静态工厂方法而不是构造方法

静态工厂方法(static factory methods)指的并不是设计模式里的工厂模式，它与设计模式并没有直接的联系，其形如:
```

public static Boolean valueOf(boolean b) {
    return b ? Boolean.TRUE : Boolean.FALSE;
}
```


### 静态工厂方法的优点
- 拥有自己的函数名
- 在每次被调用时不需要创建新的对象
- 可以返回任意子类型的对象
- 减少创建包含参数的实例时的代码冗长度


### 静态工厂方法的缺点
- 类如果没有public或protected类型的构造函数就无法被继承
- 与其他的静态工厂方法区别度不高

### 小结：
**通常使用静态工厂方法会比构造方法更好，应该避免条件反射般地提供公有的构造方法而不是优先考虑使用静态工厂方法。**

---

## Item 2:当构造函数参数较多时考虑使用建造器(builder)

比如，我们要写一个咖啡类，它包含了种类、份量(大/中/小杯)、甜度、加牛奶量、加冰块量等属性。在一般情况下我们是这样写构造函数,被称为伸缩式的构造函数模式(Telescoping constructor pattern):

```
public class Coffee {  
    private int type;     // 咖啡种类(0-10)
    private int size;     // 份量(1-3)
    private int sugar;    // 甜度，可选(0-5)，可选
    private int milk;     // 加牛奶量(ml)，可选
    private int iceCubes; // 加冰块量(g)，可选

    public Coffee(int type, int size) {  
        this(type, size, 0);  
    }

    public Coffee(int type, int size, int sugar) {  
        this(type, size, sugar, 0);  
    }  

    public Coffee(int type, int size, int sugar, int milk) {  
        this(type, size, sugar, milk, 0);
    }  

    public Coffee(int type, int size, int sugar, int milk, int iceCubes) {  
        this.type  = type;  
        this.size = size;  
        this.sugar = sugar;  
        this.milk = milk;  
        this.iceCubes = iceCubes;
    }  
}  
```

这样写的话在创建一个对象的时候可能就是这样的：
```
Coffee coffee = new Coffee(1, 3, 3, 50, 10);
```
这样的代码可读性很差，而且在参数更多时容易出错。
因此还有一种叫作 *JavaBeans pattern* 的写法：
```
public class Coffee {  
    private int type = 0;     // 咖啡种类(0-10)
    private int size = 3;     // 份量(1-3)
    private int sugar = 3;    // 甜度，可选(0-5)，可选
    private int milk = 0;     // 加牛奶量(ml)，可选
    private int iceCubes = 0; // 加冰块量(g)，可选  

    public Coffee() {}

    // setters
    public void setType(int t) {type = t;}
    public void setSize(int s) {size = s;}
    public void setSugar(int s) {sugar = s;}
    .....
}
```
采用这种模式创建对象就变得更加简单易读,不过有些啰嗦：
```
Coffee coffee = new Coffee();
coffee.setType(2);
coffee.setSize(1);
...
```
** 不幸的是，JavaBeans pattern自身有重大缺陷。由于构造过程分成了多个调用，在构建过程中JavaBeans可能处于不一致状态。类不能通过检查构造函数参数的有效性来保证一致性。如果尝试使用处于不一致状态的对象，就会导致错误，而且产生这些错误的代码大相径庭，导致很难调试。相关的另一个缺点是，JavaBeans pattern阻止了把类变为“不可变”的可能性，而且要求程序员付出额外努力来保证线程安全。 **

不过幸运的是，还有第三种方案，既有telescoping constructor的安全性又有JavaBeans Pattern的可读性，这就是Builder pattern:
```
public class Coffee {  
    private int type;     // 咖啡种类(0-10)
    private int size;     // 份量(1-3)
    private int sugar;    // 甜度，可选(0-5)，可选
    private int milk;     // 加牛奶量(ml)，可选
    private int iceCubes; // 加冰块量(g)，可选  

    public static class Builder {
        // 必选参数
        private int type;
        private int size;

        // 可选参数
        private int sugar = 3;
        private int milk = 0;
        private int iceCubes = 0;

        public Builder(int t, int s) {
            type = t;
            size = s;
        }

        public Builder sugar(int s) {
            sugar = s;
            return this;
        }

        public Builder milk(int m) {
            milk = m;
            return this;
        }

        public Builder iceCubes(int i) {
            iceCubes = i;
            return this;
        }

        public Coffee build() {
            return new Coffee(this);
        }
    }

    private Coffee(Builder builder) {
        type = builder.type;
        size = builder.size;
        sugar = builder.sugar;
        milk = builder.milk;
        iceCubes = builder.iceCubes;
    }
}
```
这样定义类的话，创建对象的代码就会变成这样：
```
Coffee coffee = new Coffee.Builder(2,3).sugar(5).milk(0).iceCubes(5);
```

### 小结：
**当设计的类的构造函数的参数超过五个时，使用Builder pattern是一个不错的选择。**

---

## Item 3:通过私有构造函数或枚举类型来强化Singleton属性

所谓Singleton是指仅能被实例化一次的类。有两种方法可以实现Singleton。

第一种, static factory方法，这种方法的优点是可以灵活地决定是否将类设置为Singleton而不用改变API：
```
public class Elvis {
    private static final Elvis INSTANCE = new Elvis();
    private Elvis() { ... }

    public static Elvis getInstance() {
        return INSTANCE;
    }
}
```
第二种，编写一个只包含一个元素的枚举类型：
```
public enum Elvis {
    INSTANCE;
    ...
}
```

### 小结：
**单元素的枚举类型是实现Singleton的最佳方式**

---

## Item 4:通过私有构造函数来实现不可实例化

---

## Item 5:避免创建不必要的对象，尽可能重复使用已经创建的对象
```
// DON'T DO THIS
String s = new String("string");

// improved version
String s = "string";
```

还有一种可能会创建不必要对象的方法：混用基本数据类型(int,long,double等)和封装的基本数据类型(Integer,Long,Double等)。
```
public static void main(String[] args) {
    Long sum = 0L;
    for (long i = 0; i < Interger.MAX_VALUE; ++i) {
        sum += i;
    }
    System.out.println(sum);
}
```

上面是一个很简单的程序，即计算int所表示的所有整数的和，因为结果会超过int的范围，所以定义long类型的sum变量。乍一看程序似乎并没有什么问题，但实际上它运行起来会你想象的慢很多，因为里面有一个字母写错了。

那就是sum的类型应该是long而不是Long，上面的代码错写成Long类型，使得程序运行时创建了大约2^31个不必要的Long类型的实例(每一次循环都有一个long类型的i加入到Long类型的sum中)，严重拖慢了运行的速度。

这段代码给我们的教训是：**尽量使用基本数据类型而不是封装的数据类型，并且小心不小心的自动封装。**

### 小结：当然这并不是所我们要避免创建对象，创建一些小型的对象对于现在的java虚拟机来说并不会造成太大的负担。创建额外的对象来增强程序的清晰度、简洁性或能力通常是好的。相反，通过维护对象池来避免创建新的对象是个坏主意，除非创建的对象非常大。

----

## Item 6:消除过时的对象引用
当我们从c/c++转用java时，会觉得它的垃圾回收机制很神奇，从而给我们一个这样的印象：写java程序时不需要考虑内存管理的问题。但这是不正确的比如下面的代码：
```
import java.util.Arrays;  
import java.util.EmptyStackException;  

public class Stack {  
   private Object[] elements;  
   private int size = 0;  
   private static final int DEFAULT_INITIAL_CAPACITY = 16;  

   public Stack() {  
      elements = new Object[DEFAULT_INITIAL_CAPACITY];  
   }  

   public void push(Object e) {  
      ensureCapacity();  
      elements[size++] = e;  
   }  

   public Object pop() {  
      if (size == 0)  
         throw new EmptyStackException();  
      return elements[--size];  
   }  

   private void ensureCapacity() {  
      if (elements.length == size)  
         elements = Arrays.copyOf(elements, 2 * size + 1);  
   }  
}  
```
这是一个关于栈的代码，看上去似乎并没有什么明显的问题，测试数据也都能通过，但是它存在一个很严重的问题——内存泄漏。对严重降低称程序的性能，极端情况下可能会导致磁盘出问题，抛出OutOfMemoryError的异常。

这段代码的泄漏发生在pop函数中，在删除栈顶元素时，被删除元素的引用仍被程序保留着，因此垃圾回收器并不会工作，将删除的元素空间回收。解决的方法是，在删除元素时强制将其无效化，即：
```
public Object pop() {  
    if (size == 0)  
        throw new EmptyStackException();
    Object result = elements[--size];

    // 无效化过时的对象引用
    elements[size] = null;

   return result;  
}
```

为了避免这种问题有人可能会在程序结束使用该对象时无效化每一个对象，但这既不必要也不现实，因为这给程序造成了不必要的混乱。**无效化对象应该是一种特例而不是常规。** 解决这个问题的最佳方案是，将每个变量都定义在它最紧凑的作用域内，这样当它完成的它的使命离开作用域时就会自动地被垃圾回收器回收。

内存泄漏的另一个常见来源是缓存，第三个来源是监听器和回调函数。

### 小结：无论何时，当一个类管理着自己的内存空间时，程序员都应该警惕内存泄漏。

---

## Item 7:避免使用finalize方法
个人感觉有一点类似于C++的析构函数，但是似乎并不太一样。

原因是在java虚拟机中会延缓使用finalize方法，从而可能会导致无法预测的问题。所以比较好的做法是，设置一个变量表示当前对象是否有效，然后在方法中检测该变量的值。最后显示的声明一个终止方法，就像java输入输出流中的close方法，然后在对象使用完后手动调用它，就像下面的代码一样。
```
Foo foo = new Foo(...);
try  {
    // Do what must be done with foo
    ...
} finally {
    // Explicit termination method
    foo.terminate();
}
```
