/**
 * Created by Suxuanhua on 2017/5/5.
 *
 * bom:browser object model:浏览器对象模型。
 *      API 位置：Browser Scripting > JavaScript > 完整的 JavaScript 对象参考手册（包含实例）>BOM
 *      对象/object:
 *          a.navigator: 通过调用不同的属性/方法，获取浏览器不同的信息。
 *              - 使用方式：window.navigator.方法名。//window可省
 *              - navigator.appName;
 *              = document.write(navigator.appName);//获取浏览器名称。
 *
 *          b.screen: 通过调用不同的属性，获取有关客户机显示屏幕的信息.
 *              - document.write(screen.width);//输出获取的屏幕宽度
 *              = document.write(screen.height);//输出获取的屏幕高度
 *
 *          c.location:通过调用不同的属性，获取有关当前 URL 的信息
 *              - href 属性：获取到  请求的url所在文件地址。
 *                  - document.write(location.href);
 *              - 设置url 地址。
 *                  - 需求：当按钮被点击的时候，跳转到另外一个网页。
 *                  1. 给按钮设置链接：   onclick = "href1();"//鼠标点击事件。
 *                      <input type="button" value="登录按钮" onclick = "href1();"/> //当该按钮被点击的时候，调用href1();方法；
 *
 *                  2. js 中的 href1();
 *                      function href1(){
 *                          //alert("aaaa");
 *                          location.href = "跳转地址";
 *                      }
 *
 *          d.history:通过调用不同的属性，获取请求的 url历史纪录。
 *                  - 需求：创建三个页面，实现网页的前进和返回。
 *                      1.创建 a.html 写一个超链接 到b.html
 *                      2.创建 b.html 超链接到 c.html
 *                      3.创建 c.html
 *                      = <input type="button" value="back" onclick="back();" />
 *                        <input type="button" value="next" onclick="next1();"/>
 *                        <script type = "text/javascript">
 *                            function back1(){history.back();}
 *                            function next1(){history.next();}
 *                        </script>
 *
 *                        history.go(-1);//加载历史列表中的前一个页面。
 *                        history.go(1);//加载历史列表中的后一个页面。
 *
 *                        //详情参看：HTML DOM History 对象
 *
 *          e.window(重点掌握):window 对象是JavaScript 层级中的顶层对象，窗口对象。
 *                            所用的bom 对象都是在window 里面操作的，比如history,location等，只是省略了window，全部是window.location()。
 *
 *                            方法：(可省window.)
 *                              1.window.alert();//简写alert();显示带有一段消息和一个确认按钮的警告框。
 *                              2.window.confirm() 显示带有一段消息以及确认按钮和取消按钮的对话框。
 *                              3.window.close() 关闭浏览器窗口。
 *                              4.----可做定时器：
 *                                   -setInterval("js代码",毫秒数);//1秒=1000毫秒。setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
 *                                          - window.setInterval("alert('123')",3000);//每3秒输出123
 *                                   -setTimeout();//在xxx毫秒之后执行，但只会执行一次。
 *                                          - window.setTimeout("alert('abc');",4000);//4秒钟之后执行代买，只执行一次。
 *                                   -clearInterval();//清除通过setInterval设置的定时器。
 *                                   -clearTimeout();//清楚setTimeout 设置的定时器。
 */