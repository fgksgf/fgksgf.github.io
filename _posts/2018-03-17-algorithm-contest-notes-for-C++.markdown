---
layout:		post
title: 		"算法竞赛笔记之C++版"
subtitle: 	"Algorithm Contest Notes for C++"
date: 		2018-03-17
author: 	"JHX"
header-img: "img/articles/algo.jpg"
catalog: true
tags:
  - C++
---

# 输入与输出
一般使用头文件#include<cstdio>中的scanf和printf进行输入输出，会比C++的cin和cout更快。

## 输入

### 输入数据个数未知
scanf函数有返回值，它返回的是成功输入的变量个数。当输入结束时，scanf函数无法再次读取，将返回0。
```
 char ch;
 while(scanf("%c", &ch) == 1 && ch != '\n')
 {
 	// do something	
 }
```

### 输入一行带空格的字符串
```
string s;
getline(cin, s);
```
## 输出
### 将内容输出到字符数组
使用sprintf的时候要保证字符数组的空间充足
```
char buffer[100];
sprintf(buffer,"%d + %d = %d", 5, 6, 5 + 6);
```
* * *
# 结构体
C＋＋不再需要用typedef的方式定义一个struct，而且在struct里除了可以有变量（称为成员变量）之外还可以有函数（称为成员函数）。
在工程中，一般用struct定义“纯数据”的类型，只包含较少的辅助成员函数，而用class定义“拥有复杂行为”的类型。

```
struct Point {
  int x, y;
  Point(int x=0, int y=0):x(x),y(y) {}
};
```
结构体Point中定义了一个函数，函数名也叫Point，但是没有返回值。这样的函数称为构造函数。构造函数是在声明变量时调用的。注意这个构造函数的两个参数后面都有“=0”字样，其中0为默认值。
“：x（x），y（y）”则是一个简单的写法，表示“把成员变量x初始化为参数x，成员变量y初始化为参数y”。也可以写成：
```
Point（int x=0，int y=0）{this->x=x；this->y=y；}
```

* * *
# 数据类型转换
## string转int,float,double
## int,float,double转string

* * *
# stl容器
## map


* * *
# algorithm 头文件
## 排序
algorithm头文件中的sort可以给任意对象排序，包括内置类型(如string，数组，容器)和自定义类型，前提是类型定义了“<”运算符。
sort函数默认是进行升序排序，只有在需要按照特殊依据进行排序时才需要传入额外的比较函数。
```
int arr[1000];
// 降序排序
bool comp(int a, int b)
{
  return a > b;
}

sort(arr, arr + 1000, comp);
```

排序之后可以用lower_bound查找大于或等于x的第一个
位置。待排序／查找的元素可以放在数组里，也可以放在vector里。