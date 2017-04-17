#关于css水平垂直居中
@(百度前端技术学院)[2016|task4]
## 水平居中
### 行内元素居中
对于display属性为inline或者inline-block的元素，都可以使用`text-align:center`将其居中对齐
```
.center-children {
	text-align:center;
}
```
### 块级元素居中
对于display属性为block的元素，可以使用左右margin值为auto来实现
```
.center-me {
	margin: 0 auto;
}
```

### 多个块级元素居中
可以使用inline-box或者flex布局来实现
```
html
<main class="inline-block-center">
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
</main>

<main class="flex-center">
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
</main>
```
inline-box：注意这种方法，如果要居中的几个块级元素的内容不一样多，它垂直方向上是会错开的，好像是按照文本内容的基线对齐的？？？
```
.inline-box-center{
	text-align:center;
}

.inline-box-center div{
	display:inline-block;
	text-align:left;
}
```
flex布局对齐
```
.flex-center {
	display:flex;
	justify-content:center;
}
```

## 垂直对齐
### 内联元素
#### 单行元素
display属性为inline或者inline-block的元素，且文字只有一行，使用padding-top和padding-bottom对齐（不需要设置height属性）
html
```
<div class="main">
<a>呵呵哈哈哈</a>
</div>
```
padding使其居中：由padding的px值撑开内联元素的容器高度
```
.main a{
  background: black;
  color: white;
  padding: 40px 30px;
  text-decoration: none;
}
```
line-height使其居中：需要知道父容器的高度，将要居中的inline元素的line-height属性设置为父容器的高度
```
.main {
	width: 200px;
	height:200px;
}
.main a{
	line-height: 200px;
}
```
原理：line-height行高的计算是由上边界+文字高度+下边界得到的，上边界和下边界是默认相同的，将line-height设置为父元素高度，默认扩充的是上边界和下边界，文字高度是不变的，其实感觉实现原理和padding的意思差不多
参考：https://segmentfault.com/a/1190000005122321

#### 多行元素
也可以使用padding，代码同上

或者使用table布局实现垂直居中

```
<div class="center-table">
  <p>I'm vertically centered multiple lines of text in a CSS-created table layout.</p>
</div>

css
.center-table{
	display:table;
	height:250px;
	background:white;
	width:240px;
	margin:20px;
}

.center-table a{
	display:table-cell;
	vertical-align:middle;
	margin:0;
	background:black;
	color:white;
	
}
```
备注：重点是父元素display设置为table，子元素display设置为table-cell，vertical-align设置为middle

或者使用before伪类
```
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
  width: 190px;
  margin: 0;
  padding: 20px;
  background: black;
}
```

### 块级元素
#### 已知元素高度
```
.parent {
	position: relative;
}

.child {
	position: absolute;
	top:50%;
	height:100px;
	margin-top: -50px;
}
```
margin-top属性要设置为子元素高度的一半

#### 元素高度未知
```
.parent{
	position: relative;
}

.child{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
```

#### 使用flexbox布局
```
.parent{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
```

## 水平垂直居中
### 高度和宽度已知
如果已知的话直接使用负margin值进行设置即可
### 高度和宽度未知
```
.parent{
	position: relative;
}

.child{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50%);
}
```

###使用flexbox
```
.parent {
	display:flex;
	justify-content: center;//主轴对齐方式
	align-items: center;//交叉轴对齐方式
}
```

参考：https://css-tricks.com/centering-css-complete-guide/