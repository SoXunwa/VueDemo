/**
 * Created by Suxuanhua on 2017/5/5.
 *
 * 全局函数：不属于任何一个对象，直接写名称使用。
 *      API 位置：Browser Scripting > JavaScript > 完整的 JavaScript 对象参考手册（包含实例）>Js 函数
 *
 *      //eval(): 执行js 代码（如果字符串是一个js代码，使用方法：直接执行）
 *          var str = "alert('1234');";
 *          eval(str);//直接将str 以js 代码方式执行
 *
 *      //encodeURI()：对字符进行编码
 *          var str = "测试中文aaa1234";
 *          var ecd = encodeURI(str);
 *          document.write(ecd);
 *
 *      //decodeURI()：对字符进行解码
 *          var dcd = decodeURI(ecd);
 *          document.write(dcd);
 *      //encodeURIComponent() decodeURIComponent() 和前两者没有区别，只是对字符进行编码的字符数量多少不同。
 *
 *      //isNaN 判断字符串不是数字，不是返回true/是返回false
 *          var str2 = "aaaa";
 *          document.write(isNaN(str2));
 *
 *      //parseInt() 函数可解析一个字符串，并返回一个整数。
 *          var str = "123";
 *          document.write(parseInt(str)+1);//124:相加
 *          document.write(str+1);//1231:字符串连接
 */
