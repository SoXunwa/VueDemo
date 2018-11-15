/**
 * Created by Suxuanhua on 2017/5/4.
 *

 1.js 和 html 的两种结合方式：
 a.使用一个<script>标签：
 <script type="text/javascript">js 代码; </script>
 b.使用一个<script>标签，引用外部文件：
 i.创建一个js 文件
 ii.
 <script type="text/javascript" src="aaa.js"></script>

 使用第二种结合方式注意事项：
 html 文件中，<script></script> 内不可以写js 代码，因为不会被执行。

 1.1 script 标签存放的位置：

 script标签可以存在任何位置。但是由于执行是由上到下执行的，
 所以，script 数据获取源不能在script标签之后，否则获取不到数据。
 建议放在</body>后面

 2.js 的原始类型和声明变量：

 定义变量：所有变量都使用 var 关键字定义：var str = "abc"; var num = 199; var flag = ture;

 五个原始类型:
 string:
 number:
 boolean:
 null:空
 undifined:定义一个没有赋值的变量；var aa;//undifined

 3.查看当前变量数据类型：
 typeof(变量名);

 4.== 和 === 的区别
 == 比较的只是值
 === 比较的是值和数据类型。

 5.引入知识
 直接向页面输出的语句（可以把内容显示在页面上）
 document.write(固定值、变量、HTML代码);
 document.write("<hr/>");

 6.数组（相当与Java 的容器）
 第一种方式：
 var arr= [1,2,3];//初始化
 var arr= [1,"aaaa",true];//初始化

 第二种方式：使用内置对象 Array 对象
 var arr=new Array(5);//定义一个数组，长度为5；
 arr[0]="1";//赋值
 第三种方式：使用内置对象 Array 对象
 var arr=new Array(3,4,5);定义一个初始化数组。

 7.方法/函数
 函数参数列表不需要写var 直接写参数名称即可。

 第一种方式：使用关键字 function
 funcion 方法名(参数列表){
                            方法体;
                            返回值，可有可无，根据实际需要。
                      }

 第二种方式：匿名函数
 //定义一个变量用于接收匿名函数的值。
 var xxxx = function(参数列表){//没有方法名
                            方法体;
                      }

 调用方法
 xxxx(传值);

 第三种方式：(用的少，只需要了解) 动态函数
 使用到js 里面的一个内置对象 Function
 var add = new Function("参数列表","方法体和返回值");
 例如：
 var add = new Function("x,y","var sum;sum=x+y;return sum;")
 调用：
 alert(3,4);

 8.全局变量 和 局部变量
 全局变量：在script 标签内定义一个变量，这个变量在整个页面中  js代码部分  任何地方  都可以使用。
 局部变量：在方法内部定义一个变量，只能在方法内部使用。

 */
