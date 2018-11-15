/**
 * Created by Suxuanhua on 2017/5/4.
 *
 * 创建对象三种方式：
 *      - var arr1 = [1,2,3];
 *      - var arr2 = new Array(3);//长度为3的数组
 *      - var arr3 = new Array(1,2,3);//数组中的元素是 1，2，3
 *      //concat() 字符串链接
 *      var arr1 = [1,2,3];
 *      var arr2 = [4,5,6];
 *      document.write(arr1.concat(arr2));//concat() 实现数组链接
 *
 *      //join() 根据指定字符分隔字符串
 *      var arr2 = new Array(3);
 *      arr2[0] = "a";
 *      arr2[1] = "b";
 *      arr2[2] = "c";
 *      document.write(arr2.join("-"));//a-b-c
 *
 *      //push() 向数组的末尾添加元素，返回添加元素后的数组长度。
 *      var arr2 = new Array(3);
 *      arr2[0] = "tom";
 *      arr2[1] = "lucy";
 *      arr2[2] = "jack";
 *      document.write("new length:"+arr2.push("zhangsan"));
 *
 */
