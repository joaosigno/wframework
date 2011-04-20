/** 
 *           File:  src\F.array.js
 *         Author:  Feng Weifeng(jpssff@gmail.com)
 *       Modifier:  Feng Weifeng(jpssff@gmail.com)
 *       Modified:  2011-04-20 16:13:15  
 *    Description:  数组相关操作
 *      Copyright:  (c) 2011-2021 wifeng.cn
 */

F.namespace('F.array');

/**
* 遍历数组，将数组内每个值传入函数fn处理，
* 函数处理得到的值，放入一个新的数据返回
*
* @param {Array} arr 传入的数组
* @param {Function} fn 处理函数
* @param {Object} opt_obj 如果有此参数，fn内会将this指向它
*/
F.array.map = function(arr, fn, opt_obj) {
	if (arr.map) {
		return arr.map(fn, opt_obj);
	}
	var l = arr.length;
	var res = [];
	var resLength = 0;
	for (var i = 0; i < l; i++) {
		if (i in arr) {
			res[resLength++] = fn.call(opt_obj, arr[i], i, arr);
		}
	}
	return res;
};

/** 
* 遍历操作
* @param {Array} arr 需要遍历的数组
* @param {Function} fn 遍历执行的函数
* @param {Object} opt_obj fn中的this指针
*/
F.array.each = function(arr, fn, opt_obj) {
	if (arr.forEach) {
		return arr.forEach(fn, opt_obj);
	}
	var r, item, i, len = arr.length;
	if ('function' == typeof fn) {
		for (i = 0; i < len; i++) {
			item = arr[i];
			r = fn.call(opt_obj, item, i);
			if (r === false) {
				break;
			}
		}
	}
};

