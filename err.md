# travel

> A Vue.js project

## Build Setup

``` bash

这个文档主要是记录一些自己在做这个项目的时候遇到的一些坑

```

``` bash
阻止默认事件的发生

1、swiper 滑动时候的警告
          [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive.
    这个警告是在鼠标模拟的滑动不小心连点了两下才发生的
    
    解决方法:
    
    在全局中填写这个样式:      touch-action: pan-y

    CSS 属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。
```

```bash
2、解决了上面的问题可是又出现了另一个问题
    [Intervention] Ignored attempt to cancel a touchend event with cancelable=false, for example because scrolling is in progress and cannot be interrupted.
    至于怎么这个警告是怎么触发出来的没明白就是像之前一样的点点点,划来划去就出现了
    
    解决方法:
    在源文件中查找 e.preventDefault 
    挨个注释 最后注释了 swiper 的源文件第 2941 行

```