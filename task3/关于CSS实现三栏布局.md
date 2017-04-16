#关于CSS实现三栏布局
@(百度前端技术学院)[2016|task3]
## 自适应布局
### 两栏布局
```
<body>
	<div class="left"></div>
	<div class="right"></div>
</body>

css
.left{
   position:relative;
   float:left;
   width:200px;
   min-height:600px;
   background-color: #999999;
 }
 .right {
   margin-left: -200px;
   float:right;
   width: 100%;
   min-height: 600px; 
   background-color: #eeeeee;
}
```
负margin的原理：可以把right元素向左移动200px，在css盒模型中，由于right已经到第二行了，向左移动是指在流中向左移动，所以会移动到上一行；

float会使元素display属性变为block，left元素和right元素总宽度相加如果超过了页面的宽度，会自动把right元素挤到下一行，此时把right元素的margin-left属性设置为-200，则恰好两个元素宽度相加为页面宽度，可以到同一行

这里right元素float：right可以让它挨紧右边框，但是为什么要给left元素设置position属性为relative就不是很懂。。。如果不设置为relative的话，right元素会把left元素盖住

position：relative属性的作用：
相对元素原先位置进行偏移（top/bottom/left/right），<font color='red'>重点是</font>元素原来的位置仍然会保留，就像有一个空div占据了元素原先位置一样，后面的元素不会占据该relative布局的元素的位置

#### 备注
三个重要属性：
- left盒子的position: relative
- right盒子的margin-left: -200px
- right盒子的width:100%

### 三栏布局
#### 绝对定位实现
```
html
<body>
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
</body>


css
body, html{
	margin:0; 
	padding:0;
}

.left, .right{
	position:absolute; 
	top:0; 
	width:200px; 
	background:#f00; 
	min-height:600px;
}

.left{
	left:0;
}

.right{
	right:0;
}

.main{
	margin:0 -200px; 
	min-height:600px; 
	background:blue; 
}
```



####  margin负值
```
html
<body>
    
    <div class="main">
        <div class="main-content"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</body>

css
.left, .right{
	float:left;
	width:200px;
	min-height:600px;
	background:#f00;
}

.left{
	margin-left: -100%;
}

.right{
	margin-left:-200px;
}

.main{
	float:left;
	width:100%;
	min-height:600px;
	background:blue;
}

.main-content{
	margin:0 200px;
}
```
备注：
- 主体结构必须在左栏和右栏之间
- 左栏与右栏都是采用margin负值定位的，左栏左浮动，margin-left为-100%，由于前面的div宽度100%与浏览器，所以这里的-100%margin值正好使左栏div定位到了页面的左侧；右侧栏也是左浮动，其margin-left也是负值，大小为其本身的宽度即200像素。


#### 自身浮动
```
html

<body>
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
</body>

css

.left, .right{width:200px; min-height:600px; background:#f00}

.left{float:left;}

.right{float:right;}

.main{margin:0 -200px; background:blue; min-height:600px;}
```
备注：
需要注意中间的div要放到最后声明！
参考链接：https://github.com/fedlover/fedlovers-blog/issues/24