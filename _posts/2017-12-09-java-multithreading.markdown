---
layout:		post
title: 		"Java 多线程学习笔记"
subtitle: 	"Some gists of Java multithreading"
date: 		2017-12-09
author: 	"JHX"
header-img: "img/articles/java.jpg"
catalog: false
tags:
  - Java
---

# Some gists of Java multithreading

* * *

## 线程的三种创建方法：
1. 继承Thread类：**多个线程之间无法共享线程类的实例变量**。

2. 实现Runnable接口：**多个线程之间可以共享线程类的实例变量**。这是因为这种方式下，程序创建的Runnable对象只是线程的target，而多个线程可以共享同一个target。

3. 使用 Callable 和 Future 创建线程：Callable可被看作是Runnable接口的增强版，它提供了一个call()方法作为线程的执行体，但是call()方法**可以有返回值**并且**可以声明抛出异常**。

###  使用 Callable 和 Future 创建线程代码实例
```
// 创建一个类实现Callable接口并实现call方法，泛型类型Integer表示call()方法的返回值为整型
public class MyThread implements Callable<Integer> {
	public Integer call() {
		int i = 0;
		for ( ; i < 100; i++) {
			System.out.println(Thread.currentThread.getName() + ": i = " + i);
		}
		return i;
	}
	
	public static void main(String[] args) {
		MyThread t = new MyThread();

		// 使用FutureTask来包装Callable对象
		FutureTask<Integer> task = new FutureTask<Integer>(t);
		for (int i = 0; i < 100; ++i) {
			if (i == 20) {
				new Thread(task).start();
			}
		}
		try {
			// 输出线程的返回值
			// 调用FutureTask对象的get()方法会导致程序阻塞
			// 因为必须等到线程运行结束才会得到返回值
			System.out.println("子线程的返回值: " + task.get());
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
```
### 创建线程方式小结：
1. Runnable, Callable接口方式非常适合多个相同线程来处理同一份资源的情况，但缺点是编程稍微复杂。
2. 继承Thread类的方式的优点是编写简单，缺点是不能再继承其他父类。
3. 因此一般推荐使用实现接口的方式来创建线程。

* * *

## 线程的生命周期
1. 线程具有五种状态：新建、就绪、运行、阻塞、死亡。
2. 使用new关键字创建一个线程后，该线程就处于新建状态。
3. 调用start()方法后线程处于就绪状态，何时开始取决于JVM的调度。
4. 如果希望调用线程在调用start()方法后立即开始执行，可以使用Thread.sleep(1)来让当前运行的线程睡眠1毫秒。因为在这1毫秒CPU不会空闲，它会去执行另一个处于就绪态的线程。
5. 主线程(main)结束时，其他线程不会受到影响。一旦子线程启动就拥有了和主线程相同的地位。
6. 当线程处于新建或死亡状态时，isAlive()方法返回false，其他状态返回true。
7.对已死亡的线程调用start()方法会引发IllegalThreadStateException异常。对新建状态的线程两次调用start()方法也是错误的，同样会引发IllegalThreadStateException异常。

* * *

## 控制线程
1. 在A线程中使用B线程的join()方法，A线程将会阻塞，知道B线程执行完为之。
2. 调用Thread类对象的setDaemon(true)方法可将线程设置为后台（守护）线程，当所有的前台线程死亡时，后台线程也随之死亡，即使后台线程没有执行完。setDaemon(true)必须在start()方法之前调用，否则引起异常。
3. yield()方法不会阻塞线程，只是让线程暂停一下转入**就绪态**，让JVM重新调度一次。暂停之后，只有优先级玉当前线程相同或者更高的处于就绪状态的线程才会获得执行的机会。
4. sleep()方法会将线程转入阻塞状态，知道经过阻塞时间才会转入就绪态，且不理会其他线程的优先级，该方法声明抛出了异常，而yield()方法没有声明抛出任何异常。sleep()方法比yield()有更好的可移植性。
5. 为保证程序具有最好的可移植性，应尽量避免直接为线程指定优先级，而应该使用MAX_PRIORITY,MIN_PRIORITY和NORM_PRIORITY三个静态常量来设置优先级。
6. 尽量避免使用suspend()和resume()方法，因为可能会导致死锁。
7. 前台线程创建的子线程默认时前台线程，后台线程创建的子线程默认是后台线程。
8. 每个线程默认的优先级与创建它的父线程相同。

* * *

## 线程同步
1. 可变类的线程安全是以降低程序的运行效率作为代价的。
2. 在单线程环境下应该使用StringBuilder来保证较好的性能；当需要保证多线程安全时，应该使用StringBuffer。
3. ReentrantLock锁具有可重入性，即一个线程可以对已被加锁的ReentrantLock锁再次加锁，ReentrantLock对象会维持一个计数器来追踪lock()方法的嵌套调用，线程在每次使用lock()方法加锁后，必须显示调用unlock()释放锁，所以一段被锁保护的代码可以调用另一个被相同锁保护的方法。
4. **死锁不等于程序阻塞**。
5. 同步机制是为了同步多个线程对相同资源的并发访问，是多个线程之间进行通信的有效方式。而ThreadLocal是为了隔离多个线程的数据共享，从根本上避免多个线程之间对共享资源(变量)的竞争。

* * *

## 线程池
使用线程池来执行线程任务的步骤：
1. 调用Executors类的静态工厂方法创建一个ExecutorService对象，该对象代表一个线程池。
2. 创建Runnable或Callable实现类的实例，作为线程执行任务。
3. 调用ExecutorService对象的submit()方法提交Runnable或Callable实例。
4. 不想提交任何任务时，调用ExecutorService对象的shutdown()方法关闭线程池。

