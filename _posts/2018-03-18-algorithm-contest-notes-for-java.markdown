---
layout:		post
title: 		"算法竞赛笔记之Java版"
subtitle: 	"Algorithm Contest Notes for Java"
date: 		2018-03-18
author: 	"JHX"
header-img: "img/articles/algo.jpg"
catalog: false
tags:
  - Java
---
# 输入
## 基本输入
```
Scanner in = new Scanner(System.in);//基本方法
Scanner in = new Scanner(new BufferedInputStream(System.in));//更快
```
## 保留若干小数位数输出


* * *
# 大整数与高精度

## 大整数 BigInteger
```
import java.math.BigInteger; 

//主要有以下方法可以使用
BigInteger add(BigInteger other) 
BigInteger subtract(BigInteger other) 
BigInteger multiply(BigInteger other) 
BigInteger divide(BigInteger other)
BigInteger [] dividedandRemainder(BigInteger other) //数组第一位是商，第二位是余数
BigInteger pow(int other)// other次方
BigInteger mod(BigInteger other) 
BigInteger gcd(BigInteger other) 
int compareTo(BigInteger other) //负数则小于,0则等于,正数则大于
static BigInteger valueOf(long x)
```

## 高精度 BigDecimal
```
BigDecimal add(BigDecimal other)
BigDecimal subtract(BigDecimal other)
BigDecimal multiply(BigDecimal other)
BigDecimal divide(BigDecimal other)
BigDecimal divide(BigDecimal divisor, int scale, BigDecimal.ROUND_HALF_UP)//除数，保留小数位数，保留方法四舍五入
BigDecimal.setScale()方法用于格式化小数点 //setScale(1)表示保留一位小数，默认用四舍五入方式

//求sqrt(x)，保留前n位数字（不是小数点后n位），n位后直接舍弃（非四舍五入）
private static BigDecimal sqrt(BigDecimal x, int n) {
    BigDecimal ans = BigDecimal.ZERO;
    BigDecimal eps = BigDecimal.ONE;
    for (int i = 0; i < n; ++i) {
        while (ans.pow(2).compareTo(x) < 0) {
            ans = ans.add(eps);
        }
        ans = ans.subtract(eps);
        eps = eps.divide(BigDecimal.TEN);
    }
    return ans;
}
```

* * *
# 字符串
## String
## StringBuilder

* * *
# 数据类型转换
## string转int,float,double
## int,float,double转string

* * *
# 进制转换


* * *
# 排序
