/**
 * Created by Suxuanhua on 2017/5/5.
 * (面试题目)
 *  Js 里面不存在重载。但是 Js 可以通过arguments 数组模拟重载，但不是真正的。
 *
 *      function add(a,b){
 *          arguments//每个函数里面都有这个数组，用于保存接收进来的参数。具备数组的属性。
 *          for (var i = 0;i <arguments.length;i++)//取出数组中的内容
 *          {
 *          }
 *      }
 *      //可以传多个值
 *      alert(add(1,2));
 *      alert(add(1,2,3));
 *      alert(add(1,2,3,4));
 *
 */
