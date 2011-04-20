/** 
 *           File:  src\F.js
 *         Author:  Feng Weifeng(jpssff@gmail.com)
 *       Modifier:  Feng Weifeng(jpssff@gmail.com)
 *       Modified:  2011-04-20 16:16:57  
 *    Description:  F框架主文件
 *      Copyright:  (c) 2011-2021 wifeng.cn
 */
/**
* 参数命名规范：
* 1、按照类型命名
* 1.1 数组 arr*
* 1.2 函数 fn* callback*
* 1.3 字符串 s, str
*/

/**
* 框架顶级命名空间
*/
var F = {
	version: 20110419
};

/**
* 当前作用域this指针
*/
F.env = this;

/**
* 获取唯一的id
*/
F.getGuid = function() {
	var _id = 1;
	F.getGuid = function() {
		_id++;
		return _id;
	};
	return _id;
};

/**
* 表示已经引入的命名空间
*/
F._included = {};

/**
* 为给定的参数创建命名空间
*/
F.namespace = function(name) {
	var ns = name.split('.'),
	nt = ns.shift(),
	is_f = nt == 'F' || nt == 'feng',
	g = is_f ? F: (F.env[nt] = {}),
	cur = g,
	part;
	if (is_f) {
		F._included[name] = true;
	}
	while (ns.length && (part = ns.shift())) {
		if (!cur[part]) {
			cur[part] = {};
		}
		cur = cur[part];
	}
};

/**
* 声明需要依赖的“包”，框架根据这些信息将依赖的“包”
* 引入到当前环境中。
*/
F.require = function(name) {
	if (!F._included[name]) {
		//TODO
	}
};

/** 
* 模拟继承，子类可以使用_superClass找到父类
*/
F.inherits = function(fn, parentFn) {
	function tempFn() {};
	tempFn.prototype = parentFn.prototype;
	childCtor._superClass = parentFn.prototype;
	childCtor.prototype = new tempFn();
	childCtor.prototype.constructor = fn;
};

