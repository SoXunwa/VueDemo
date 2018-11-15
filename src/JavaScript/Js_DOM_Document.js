/**
 * Created by Suxuanhua on 2017/5/13.
 *
 * dom:document object model:文档 对象 模型
 *      文档：超文本标记型文档（html、xml）
 *      对象：提供对象属性和方法
 *      模型：使用属性和方法操作超文本标记型文档
 *
 *
 *      使用js 中的dom对象的属性和方法，对超文本标记型文档进行操作。
 *      想要对标记型文档进行操作，首先需要对标记型文档里面的所有内容封装成对象、解析标记型文档。
 *              封装成对象，比如：
 *                  把html 里面的标签、属性、文本内容都封装成对象。
 *              解析标记型文档 html：
 *                  1.根据html 的层级结构，在内存中分配一个树形结构：
 *                     //只能有一个根节点，在根节点下面可以有多个子节点，没有子节点的节点，称为“叶子”节点。
 *                     |-- <html></html>
 *                            |-- <head></head>
 *                                 |-- <title></title>
 *                                 |-- <meta> ...
 *                            |-- <body></body>
 *                                 |-- <div></div>
 *                                 |-- <span></span> ...
 *                    对应js 中的对象：
 *                     document: 整个 html 文档
 *                     element: 标签对象 如:<head></head> \ <body></body> \ <div></div> ...
 *                     ------以下不能单独存在，要从属于某个对象-----
 *                     属性对象:id、 stayle ...
 *                     文本对象:文本
 *                     ----------------------
 *                     Node 节点对象，是这些对象的父对象。如果在前面几个对象中找不到具体的方法，到node 对象里面找。
 *
 * DHTML: 很多技术的简称。
 *      HTML:封装数据
 *      CSS:使用属性和属性值设置样式
 *      DOM:操作html文档
 *      JavaScript:专门指的是js 的语法语句（ECMAScript）
 *
 *
 * document 对象：每个载入浏览器的HTML 文档，都会成为document 对象。
 *      常用方法：
 *          - write():1.向页面输出变量、值。2.向页面输出html代码。
 *          - getElementById():通过id 获取找到元素（标签）//返回一个对象。
 *                  使用示例:
 *                  <input type="text" id ="title" value = "aaaa"/>
 *                  var obj = document.getElementById("title");//通过id获取对象
 *                  alert(obj.value);//通过对象操作对象中具有的属性。
 *                  alert(obj.id);
 *
 *                  向input 里面设置一个值value
 *                  obj.value = "bbbb";//赋值bbbb
 *
 *           - getElementsByName():通过标签的name 属性值得到标签，返回一个集合。
 *                  <input type="text" name="name1234" value = "aaaa"/>
 *                  <input type="text" name="name1234" value = "bbbb"/>
 *                  <input type="text" name="name1234" value = "cccc"/>
 *                  <input type="text" name="name1234" value = "dddd"/>
 *                  //得到标签
 *                  var inputs = document.getElementsByName("name1234");
 *                  //分别得到各个标签的值
 *                  for(var i=0;i< inputs.length;i++)
 *                  {
 *                      var inputXX = inputs[i];//将每次循环得到的值赋给inputXX
 *                      alert(inputXX.value);
 *                  }
 *
 *            - getElementsByTagName():通过标签类型获取，返回带有指定标签名的对象的集合。
 *                  <input type="text" name="name1234" value = "aaaa"/>
 *                  <input type="text" name="name1234" value = "bbbb"/>
 *                  <input type="text" name="name1234" value = "cccc"/>
 *                  <input type="text" name="name1234" value = "dddd"/>
 *
 *                  var inputTag = document.getElementsByName("input");
 *                  //其余部分同上
 *
 *     **** 特殊情况：
 *                  - 当 getElementsByName() 只获取一个对象时，返回一个集合没意义，而且还要通过遍历才能获取其中的值，所以要使用以下方法获取一个对象：
 *                         var in = document.getElementsByName()[0];//通过该方法获取该返回集合中，角标为0的元素。//返回值的一个对象
 *                         不能使用：in.length
 *
 *                  - getElementsByTagName() 同上
 *
 */

