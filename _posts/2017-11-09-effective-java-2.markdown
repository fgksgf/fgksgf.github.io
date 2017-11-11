---
layout:     post
title:      "《Effective Java》笔记(2)"
subtitle:   "Reading notes of Effective Java(2)"
date:       2017-11-09
author:     "fgksgf"
header-img: "img/articles/lib.jpg"
catalog: false
tags:
    - ReadingNotes
---

# Chapter 2-Methods Common to All Objects



## Item 8:在重载equals函数时遵从基本原则

重载equals方法看上去很简单，但是实际上却非常容易出错，从而导致一些严重的后果。为了避免这些错误，最好的方法就是不去重载它。

那么什么时候确实需要重载equals函数呢？当一个类拥有逻辑相等的概念时(即该类产生的对象需要具有唯一的身份标识相互区别开)和类的父类还没有重载equals函数来实现相应的功能时。

以下是重载equals方法时要遵从的基本原则：
+ 可逆性：x.equals(x) == true
+ 对称性：x.equals(y) == true && y.equals(x) == true
+ 传递性：if (x.equals(y) == true && y.equals(z) == true) then x.equals(z) == true
+ 一致性：x.equals(y)的返回值必须为定值
+ x.equals(null) == false

一旦你违背上述原则，你将不知道其他对象遇到你的对象时会发生什么。

写出高质量equals函数的方法：
1. 使用==操作符来检查传入的参数是否是该对象的引用
2. 使用instanceof操作符检查传入的参数类型是否正确
3. 将参数的类型强制转换为正确的类型
4. 将类中每一个重要的成员变量与传入参数相应的成员变量进行比较
5. 完成equals函数之后问自己：是否遵循了可逆性、对称性、传递性和一致性

### 小结
**重载equals函数并没有想象的那么简单，如果不是类具有逻辑上相等的概念的话，最好不要重载它，如果要则必须遵守重载该函数的一些基本原则。**


---


## Item 9:总是在重载equals函数的同时重载hashCode函数

如果在重载equals函数后没有重载hashCode函数，将会导致类碰到基于哈希的容器(HashSet,HashMap,Hashtable)时出现一些问题。

hashCode函数必须始终返回同一个的整数。

生成特征整数值可以提高哈希表的性能。

**逻辑上相等的对象必须拥有相等的hashCode**

编写hashCode函数的方法：
1. 存储一些非零整数常量，比如17，记为变量result
2. 为类中每一个重要（能将该对象与其他对象区分开）的成员变量f做以下操作：
    + 为f计算哈希值c
        + 如果f时布尔型变量: f ? 1:0
        + 如果f是byte,char,short或者int类型: (int)f
        + 如果f是long类型: (int)(f ^ (f >>> 32))
        + 如果f是float类型: Float.floatToBits(f)
        + 如果f是double类型: 先Double.doubleToLongBits(f)在将long类型的结果按照上述long的情况计算
        + 如果f是对象引用，并且该类的equals通过递归调用该对象引用的equals来比较这个字段，则递归调用该字段的hashCode；如果需要更复杂的比较，则为该字段计算一个范式（canonical representation），在该范式上调用hashCode；如果该字段为null，则返回0（也可以返回其他常数，但一般用0）
        + 如果f是一个数组，则将数组中每一个元素看作一个单独的成员变量再按照上述方法计算
    + result = 31 * result + c
3. 返回result值
4. 完成hashCode方法后问自己，相等的实例是否具有相等的hash code，使用单元测试来验证你的直觉。如果相等实例的hash code不等，找出并解决问题。

在计算hash code时还必须排除掉equals函数中没用比较的成员变量。

下面是电话号码类的hashCode函数，areaCode为int类型，表示区号，lineNumber也是int类型，表示区号后面的号码：
```
@Override
public int hashCode() {
    int result = 17;
    result = 31 * result + areaCode;
    result = 31 * result + lineNumber;
    return result;
}
```
如果像上面这样写，每次调用该函数都需要计算一次，要计算的哈希值很多时，这样就会降低性能，因此可以进一步改进。因为哈希值是不变的，因此可以将第一次的计算结果保存起来,这样只需要计算一次：
```
private volatile int hashCode;

@Override
public int hashCode() {
    int result = hashCode;
    if (result == 0) {
        result = 17;
        result = 31 * result + areaCode;
        result = 31 * result + lineNumber;
        hashCode = result;
    }
    return result;
}

不要为了提高性能而减少对对象中一些关键成员变量的哈希值的计算。
```


---


## Item 10:永远重载toString函数

在java.lang.Object中已经提供了该函数的实现，但它返回的字符串并不是用户想看到的，它返回的是形如"PhoneNumber@163b31"样子的，@后面表示的是十六进制的哈希值。

重载toString函数的基本原则是：返回的字符串要简明却又内容丰富，要让人能轻易读懂。

当对象被传入println，printf等函数或字符串连接符数中或assert或作为debug信息被打印出来时，toString函数会被自动地调用。

在实践中，toString函数应该返回对象包含的所有关键的重要的信息。

无论你是否决定明确规定toString返回的格式，你都应该清楚地用文档或注释说明你的意图。
无论你是否决定明确规定toString返回的格式，你都应该给toString返回值中的所有信息提供程序化的访问。


---


## Item 11:明智地重载clone函数

clone函数创建对象时不需要调用构造函数。

编写clone函数的基本原则：
+ x.clone() != x ==> true
+ x.clone.getClass() == x.getClass ==> true
+ x.clone.equals(x) ==> true

但是上面的要求并不是绝对的。这些基本原则有许多的问题。

如果为一个nonfinal类重载clone函数，应该返回一个从super.clone()得到的对象.

如果一个对象包含可变对象的引用（例如数组），简单的使用父类的clone函数将会是灾难性的，因为拷贝出的对象的成员变量数组与原对象成员变量数组会指向同一个引用，这样修改其中一个的数组元素另一个对象的成员变量数组元素也会发生改。最简单的解决办法就是在复制数组时使用数组自己的clone函数。

为了拷贝一个类，可能需要将类的成员变量的final修饰符去掉。

拷贝对象还有一种很好的方法，就是提供一个拷贝构造函数，形如：
```
public Yum(Yum yum);
```
这种方法和clone函数相比有许多的优点，然而我们却不可能将拷贝构造函数防止接口中。


---


## Item 12:考虑实现Comparable方法

与之前提到的几个方法不同，compareTo方法不是声明在Object类中的，而是Comparable接口中的一个方法，但它却非常常用，通过实现这个方法可以实现对象按照自定义的顺序来排序。

```
public class WordList {
    public static void main(String[] args) {
        Set<String> s = new TreeSet<String>();
        Collections.addAll(s, args);
        System.out.println(s);
    }
}
```
上述代码输出的结果的字符串是按照字母顺序排序的，通过实现Comparable接口可以实现按数字排序，按时间排序等顺序。

实现compareTo方法的原则与equals的相似。它的返回值有三种情况：-1，0，1，分别表示小于，等于和大于的情况。

比较两个电话号码的compareTo方法可以这样写：
```
public int compareTo(PhoneNumber pn) {
    // 比较区号
    if (areaCode < pn.areaCode)
        return -1;
    if (areaCode > pn.areaCode)
        return 1;

    // 比较区号后的数字
    if (lineNumber < pn.lineNumber)
        return -1;
    if (lineNumber > pn.lineNumber)
        return 1;

    return 0;
}
```

然而这种写法还可以改进变的更快：
```
public int compareTo(PhoneNumber pn) {
    int areaCodeDiff = areaCode - pn.areaCode;
    if (areaCodeDiff != 0)
        return areaCodeDiff;

    return lineNumber - pn.lineNumber;
}
```
这样写确实很巧妙但是要注意一个问题，当lineNumber为一个很大的正数而pn.lineNumber是一个很小的负数，两个相减将会导致溢出，从而得到一个负数结果。

因此除非十分确定成员变量的范围，否则不要使用第二种方法。
