/**
 * Created by Suxuanhua on 2017/5/4.
 *
 String 对象：
 在w3school 查看String 全部方法，位置：Browser Scripting > JavaScript > JS 字符串 > 请查看我们的 JavaScript String 对象参考手册。
 a.与HTML相关的方法：
 - bold(): 加粗
 var str1="asdf";
 dcoument.write(str1.bold());
 - fontcolor(): 设置字符串颜色
 var str2="wwww";
 document.write(str2.fontcolor("red"));
 - fontsize():设置字体大小
 var str3="qqqqq";
 document.write(str3.fontsize(5));
 - link(url): 将字符串显示成超链接
 var str4="haha";
 document.write(str.link(xxx\xx\x\xx.html));
 - sup 和 sub : 上标/下标
 var s1="100";
 var s2="200";
 var s3="300";
 document.write(s1.sub());
 document.write(s3);
 document.write(s2.sup());

 b.与Java相似的方法：
 - concat() 连接字符串
 var str1="xxx";
 var str2="bbb";
 document.write(str1.concat(str2));
 - charAt() 返回指定位置的字符
 var str = "Hello world!";
 document.write(str.charAt(2));//返回角标位置为 2 的字符。
 - indexOf() 返回字符串的位置
 var str="Hello world!";

 document.write(str.indexOf("Hello") + "<br />");
 document.write(str.indexOf("World") + "<br />");
 document.write(str.indexOf("world"));
 - split() 方法用于把一个字符串分割成字符串数组
 var str="How are you doing today?"
 //var arr = str.split(" ");
 document.write(str.split(" ") + "<br />");
 document.write(str.split("") + "<br />");
 document.write(str.split(" ",3));
 - replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
 var str="Visit Microsoft!"
 document.write(str.replace(/Microsoft/, "W3School"))

 - substr 和 substring
 stringObject.substr(start,length):substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
 stringObject.substring(start,stop):substring() 方法用于提取字符串中介于两个指定下标之间的字符。

 var str = "abcdefghijklmnopq"
 document.write(str.supstr(5,3));//从第几位开始，向后截取几位。
 document.write(str.supstring(5,3));//从第几位开始，到第几位结束（不包含第几位）。
 //更多详情看 w3school API
 */
