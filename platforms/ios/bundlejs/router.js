// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(47);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _home = __webpack_require__(49);

	var _home2 = _interopRequireDefault(_home);

	var _topic = __webpack_require__(104);

	var _topic2 = _interopRequireDefault(_topic);

	var _class = __webpack_require__(120);

	var _class2 = _interopRequireDefault(_class);

	var _shop = __webpack_require__(128);

	var _shop2 = _interopRequireDefault(_shop);

	var _my = __webpack_require__(132);

	var _my2 = _interopRequireDefault(_my);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by zwwill on 2017/8/29.
	 */
	Vue.use(_vueRouter2.default);

	exports.default = new _vueRouter2.default({
	    // mode: 'abstract',
	    routes: [{ path: '/home', component: _home2.default }, { path: '/topic', component: _topic2.default }, { path: '/class', component: _class2.default }, { path: '/shop', component: _shop2.default }, { path: '/my', component: _my2.default }, { path: '/', redirect: '/home' }]
	});
	module.exports = exports['default'];

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zwwill on 2017/8/27.
	 */

	var utilFunc = {
	    initIconFont: function initIconFont() {
	        var domModule = weex.requireModule('dom');
	        domModule.addRule('fontFace', {
	            'fontFamily': "iconfont",
	            'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
	        });
	    },
	    setBundleUrl: function setBundleUrl(url, jsFile) {
	        var bundleUrl = url;
	        var host = '';
	        var path = '';
	        var nativeBase = void 0;
	        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/dist';
	        } else if (isiOSAssets) {
	            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	            var matchFirstPath = /\/\/[^\/]+\/([^\/]+)\//.exec(bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            if (matchFirstPath && matchFirstPath.length >= 2) {
	                path = matchFirstPath[1];
	            }
	            nativeBase = 'http://' + host + '/';
	        }
	        var h5Base = './index.html?page=';
	        // in Native
	        var base = nativeBase;
	        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	            // check if in weexpack project
	            if (path === 'web' || path === 'dist') {
	                base = h5Base + '/dist/';
	            } else {
	                base = h5Base + '';
	            }
	        } else {
	            base = nativeBase + (!!path ? path + '/' : '');
	        }

	        var newUrl = base + jsFile;
	        return newUrl;
	    },
	    getUrlSearch: function getUrlSearch(url, name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = url.slice(url.indexOf('?') + 1).match(reg);
	        if (r != null) {
	            try {
	                return decodeURIComponent(r[2]);
	            } catch (_e) {
	                return null;
	            }
	        }
	        return null;
	    }
	};

	exports.default = utilFunc;
	module.exports = exports['default'];

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(16);
	var enumBugKeys = __webpack_require__(29);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(17);
	var toIObject = __webpack_require__(18);
	var arrayIndexOf = __webpack_require__(21)(false);
	var IE_PROTO = __webpack_require__(25)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(19);
	var defined = __webpack_require__(14);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(18);
	var toLength = __webpack_require__(22);
	var toAbsoluteIndex = __webpack_require__(24);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(23);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(23);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(26)('keys');
	var uid = __webpack_require__(28);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(27);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(27);
	var core = __webpack_require__(32);
	var ctx = __webpack_require__(33);
	var hide = __webpack_require__(35);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(34);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(36);
	var createDesc = __webpack_require__(44);
	module.exports = __webpack_require__(40) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(37);
	var IE8_DOM_DEFINE = __webpack_require__(39);
	var toPrimitive = __webpack_require__(43);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(40) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(40) && !__webpack_require__(41)(function () {
	  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(41)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);
	var document = __webpack_require__(27).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(38);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.7.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	function isError (err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent && parent._routerRoot !== parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (
	        (val && current !== vm) ||
	        (!val && current === vm)
	      ) {
	        matched.instances[name] = val;
	      }
	    }

	    // also regiseter instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    var val = extraQuery[key];
	    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
	  }
	  return parsedQuery
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */


	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    // check nested equality
	    if (typeof aVal === 'object' && typeof bVal === 'object') {
	      return isObjectEqual(aVal, bVal)
	    }
	    return String(aVal) === String(bVal)
	  })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null
	            ? 'router-link-active'
	            : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null
	            ? 'router-link-exact-active'
	            : globalExactActiveClass;
	    var activeClass = this.activeClass == null
	            ? activeClassFallback
	            : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null
	            ? exactActiveClassFallback
	            : this.exactActiveClass;
	    var compareTarget = location.path
	      ? createRoute(null, location, null, router)
	      : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  var isDef = function (v) { return v !== undefined; };

	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._routerRoot = this;
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      } else {
	        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this._routerRoot._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this._routerRoot._route }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (index$1(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!index$1(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!index$1(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (index$1(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var normalizedPath = normalizePath(path, parent);
	  var pathToRegexpOptions = route.pathToRegexpOptions || {};

	  if (typeof route.caseSensitive === 'boolean') {
	    pathToRegexpOptions.sensitive = route.caseSensitive;
	  }

	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named, does not redirect and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    var aliases = Array.isArray(route.alias)
	      ? route.alias
	      : [route.alias];

	    aliases.forEach(function (alias) {
	      var aliasRoute = {
	        path: alias,
	        children: route.children
	      };
	      addRouteRecord(
	        pathList,
	        pathMap,
	        nameMap,
	        aliasRoute,
	        parent,
	        record.path || '/' // matchAs
	      );
	    });
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function compileRouteRegex (path, pathToRegexpOptions) {
	  var regex = index(path, [], pathToRegexpOptions);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = {};
	    regex.keys.forEach(function (key) {
	      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
	      keys[key.name] = true;
	    });
	  }
	  return regex
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */


	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched.length) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;

	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */


	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      if (!record) { return _createRoute(null, location) }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location, null, router))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
	        offset = normalizeOffset(offset);
	        position = getElementPosition(el, offset);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el, offset) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left - offset.x,
	    y: elRect.top - docRect.top - offset.y
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function normalizeOffset (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : 0,
	    y: isNumber(obj.y) ? obj.y : 0
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once(function (resolvedDef) {
	          if (resolvedDef.__esModule && resolvedDef.default) {
	            resolvedDef = resolvedDef.default;
	          }
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = isError(reason)
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) { next(); }
	  }
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (called) { return }
	    called = true;
	    return fn.apply(this, args)
	  }
	}

	/*  */

	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) { cb(route); });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
	    }
	  });
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function (err) {
	    if (isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) { cb(err); });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || isError(to)) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' && (
	            typeof to.path === 'string' ||
	            typeof to.name === 'string'
	          ))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	      // strip full URL origin
	      base = base.replace(/^https?:\/\/[^\/]+/, '');
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      var current = this$1.current;
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var href = window.location.href;
	  var i = href.indexOf('#');
	  var base = i >= 0 ? href.slice(0, i) : href;
	  window.location.replace((base + "#" + path));
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};

	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};

	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? to.matched
	      ? to
	      : this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(
	    to,
	    current || this.history.current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.7.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(50)
	)

	/* script */
	__vue_exports__ = __webpack_require__(51)

	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/views/home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-93d2c55c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "main-list": {
	    "position": "fixed",
	    "top": 168,
	    "bottom": 90,
	    "left": 0,
	    "right": 0
	  },
	  "cell-button": {
	    "paddingBottom": 18
	  },
	  "slogan": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "backgroundColor": "#ffffff"
	  },
	  "i-slg": {
	    "height": 66,
	    "fontSize": 26,
	    "paddingTop": 16,
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#b4282d"
	  }
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(52);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _Header = __webpack_require__(75);

	var _Header2 = _interopRequireDefault(_Header);

	var _refresh = __webpack_require__(79);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _topChannel = __webpack_require__(83);

	var _topChannel2 = _interopRequireDefault(_topChannel);

	var _YXSlider = __webpack_require__(87);

	var _YXSlider2 = _interopRequireDefault(_YXSlider);

	var _Block = __webpack_require__(91);

	var _Block2 = _interopRequireDefault(_Block);

	var _Block3 = __webpack_require__(95);

	var _Block4 = _interopRequireDefault(_Block3);

	var _Block5 = __webpack_require__(99);

	var _Block6 = _interopRequireDefault(_Block5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');
	exports.default = {
	    components: {
	        'home-header': _Header2.default,
	        'refresher': _refresh2.default,
	        'top-channel': _topChannel2.default,
	        'yx-slider': _YXSlider2.default,
	        'block-1': _Block2.default,
	        'block-2': _Block4.default,
	        'block-3': _Block6.default
	    },
	    data: function data() {
	        return {
	            YXBanners: [{ title: '', src: 'http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg' }, { title: '', src: 'http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg' }, { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg' }, { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg' }, { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg' }, { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-5.jpg' }, { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg' }],
	            block1: {
	                title: '品牌制造商直供',
	                items: [{
	                    name: "新秀丽制造商",
	                    price: "59",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
	                }, {
	                    name: "MUJI制造商",
	                    price: "12.9",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
	                }, {
	                    name: "CK制造商",
	                    price: "29",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
	                }, {
	                    name: "Adidas制造商",
	                    price: "29",
	                    bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
	                }]
	            },
	            head1: {
	                tlt: '周一周四 · 新品发布',
	                tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
	                url: 'http://m.you.163.com/item/newItem'
	            },
	            goods1: [{ tlt: "日式和风声波式电动牙刷", img: "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330", info: "进口刷毛，专利技术", price: "119" }, { tlt: "小馒头 多色双肩包", img: "http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330", info: "奶油色泽，小巧减龄", price: "79" }, { tlt: "多功能商务双肩包", img: "http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330", info: "17个功能分区，内置分层收纳", price: "334" }, { tlt: "切尔西牛皮女靴", img: "http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330", info: "经典牛皮切尔西，时尚帅气", price: "289" }, { tlt: "清心花茶壶套装", img: "http://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330", info: "明亮通透，滤茶迅速", price: "119" }, { tlt: "全棉色织磨毛四件套", img: "http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330", info: "优雅色织，温暖磨毛", price: "299" }, { tlt: "黑凤梨 20寸PC膜拉链登机箱", img: "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330", info: "热卖9万只，网易人手1只", price: "185" }, { tlt: "日式和风敞口保温杯", img: "http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330", info: "真空隔热，保温保冷", price: "32" }],
	            head2: {
	                tlt: '人气推荐 · 好物精选',
	                tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
	                url: 'http://m.you.163.com/item/recommend'
	            },
	            goods2: [{ tlt: "牛皮复古双肩背包", img: "http://yanxuan.nosdn.127.net/6fe7a267fee8eb288cc28d67d5d9f57c.png?imageView&quality=85&thumbnail=330x330", info: "复古全牛皮，体验品质格调", price: "479" }, { tlt: "双宫茧桑蚕丝被 空调被", img: "http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330", info: "一级桑蚕丝，吸湿透气柔软", price: "479" }, { tlt: "清新两用杯", img: "http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330", info: "办公杯优选 轻松饮茶", price: "52" }, { tlt: "日式蓬软太鼓抱枕", img: "http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330", info: "萌趣太鼓造型 软糯轻柔回弹", price: "29" }, { tlt: "怀抱休闲椅组合（皮款）", img: "http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330", info: "葛优躺神器皮款", price: "3999" }, { tlt: "欧式哑光餐具套装", img: "http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330", info: "德化白瓷，坚实耐用", price: "189" }, { tlt: "可水洗抗菌防螨丝羽绒枕", img: "http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330", info: "进口防螨布，热销50万件", price: "99" }, { tlt: "两带式男/女款拖鞋", img: "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330", info: "鞋杯随脚型而变，舒适呵护", price: "69.9" }],
	            goods3: [{ tlt: "日式和风敞口保温杯", img: "http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330", info: "真空隔热，保温保冷", price: "32" }, { tlt: "切尔西牛皮女靴", img: "http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330", info: "经典牛皮切尔西，时尚帅气", price: "289" }, { tlt: "小馒头 多色双肩包", img: "http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330", info: "奶油色泽，小巧减龄", price: "79" }, { tlt: "全棉色织磨毛四件套", img: "http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330", info: "优雅色织，温暖磨毛", price: "299" }, { tlt: "日式和风声波式电动牙刷", img: "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330", info: "进口刷毛，专利技术", price: "119" }, { tlt: "多功能商务双肩包", img: "http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330", info: "17个功能分区，内置分层收纳", price: "334" }, { tlt: "黑凤梨 20寸PC膜拉链登机箱", img: "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330", info: "热卖9万只，网易人手1只", price: "185" }, { tlt: "日式蓬软太鼓抱枕", img: "http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330", info: "萌趣太鼓造型 软糯轻柔回弹", price: "29" }, { tlt: "可水洗抗菌防螨丝羽绒枕", img: "http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330", info: "进口防螨布，热销50万件", price: "99" }, { tlt: "双宫茧桑蚕丝被 空调被", img: "http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330", info: "一级桑蚕丝，吸湿透气柔软", price: "479" }, { tlt: "怀抱休闲椅组合（皮款）", img: "http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330", info: "葛优躺神器皮款", price: "3999" }, { tlt: "欧式哑光餐具套装", img: "http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330", info: "德化白瓷，坚实耐用", price: "189" }, { tlt: "清新两用杯", img: "http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330", info: "办公杯优选 轻松饮茶", price: "52" }, { tlt: "两带式男/女款拖鞋", img: "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330", info: "鞋杯随脚型而变，舒适呵护", price: "69.9" }],
	            showLoading: 'hide'
	        };
	    },


	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        },
	        onloading: function onloading() {
	            var _this = this;

	            modal.toast({ message: 'loading', duration: 0.3 });
	            this.showLoading = 'show';
	            setTimeout(function () {
	                var _goods;

	                (_goods = _this.goods3).push.apply(_goods, (0, _toConsumableArray3.default)(_this.goods1));
	                _this.showLoading = 'hide';
	            }, 600);
	        },
	        loadingDown: function loadingDown() {
	            var _goods2, _goods3;

	            this.goods3 = [];
	            (_goods2 = this.goods3).push.apply(_goods2, (0, _toConsumableArray3.default)(this.goods2));
	            (_goods3 = this.goods3).push.apply(_goods3, (0, _toConsumableArray3.default)(this.goods1));
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(53);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	__webpack_require__(68);
	module.exports = __webpack_require__(32).Array.from;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(56)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(57)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(23);
	var defined = __webpack_require__(14);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(58);
	var $export = __webpack_require__(31);
	var redefine = __webpack_require__(59);
	var hide = __webpack_require__(35);
	var has = __webpack_require__(17);
	var Iterators = __webpack_require__(60);
	var $iterCreate = __webpack_require__(61);
	var setToStringTag = __webpack_require__(65);
	var getPrototypeOf = __webpack_require__(67);
	var ITERATOR = __webpack_require__(66)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(62);
	var descriptor = __webpack_require__(44);
	var setToStringTag = __webpack_require__(65);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(35)(IteratorPrototype, __webpack_require__(66)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(37);
	var dPs = __webpack_require__(63);
	var enumBugKeys = __webpack_require__(29);
	var IE_PROTO = __webpack_require__(25)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(42)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(64).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(36);
	var anObject = __webpack_require__(37);
	var getKeys = __webpack_require__(15);

	module.exports = __webpack_require__(40) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(27).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(36).f;
	var has = __webpack_require__(17);
	var TAG = __webpack_require__(66)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(26)('wks');
	var uid = __webpack_require__(28);
	var Symbol = __webpack_require__(27).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(17);
	var toObject = __webpack_require__(13);
	var IE_PROTO = __webpack_require__(25)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(33);
	var $export = __webpack_require__(31);
	var toObject = __webpack_require__(13);
	var call = __webpack_require__(69);
	var isArrayIter = __webpack_require__(70);
	var toLength = __webpack_require__(22);
	var createProperty = __webpack_require__(71);
	var getIterFn = __webpack_require__(72);

	$export($export.S + $export.F * !__webpack_require__(74)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(37);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(60);
	var ITERATOR = __webpack_require__(66)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(36);
	var createDesc = __webpack_require__(44);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(73);
	var ITERATOR = __webpack_require__(66)('iterator');
	var Iterators = __webpack_require__(60);
	module.exports = __webpack_require__(32).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20);
	var TAG = __webpack_require__(66)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(66)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(76)
	)

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8b86b978"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 114,
	    "paddingTop": 44,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "zIndex": 101,
	    "backgroundColor": "#fafafa",
	    "opacity": 0.99
	  },
	  "scan": {
	    "height": 80,
	    "width": 96
	  },
	  "notice": {
	    "height": 80,
	    "width": 96
	  },
	  "ic": {
	    "textAlign": "center",
	    "color": "#666666",
	    "fontWeight": "300",
	    "fontSize": 32
	  },
	  "txt": {
	    "textAlign": "center",
	    "color": "#666666",
	    "fontWeight": "300",
	    "fontSize": 18
	  },
	  "search": {
	    "textAlign": "center",
	    "color": "#666666",
	    "fontWeight": "300",
	    "flex": 1,
	    "height": 60,
	    "fontSize": 26,
	    "paddingTop": 13,
	    "backgroundColor": "#ededed",
	    "borderRadius": 8
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    data: function data() {
	        return {};
	    },
	    created: function created() {},

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            if (!_url) _url = 'http://m.you.163.com/search';
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "false"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._m(0), _c('text', {
	    staticClass: ["search", "iconfont"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb()
	      }
	    }
	  }, [_vm._v(" 搜索商品，共8888款好物")]), _vm._m(1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["scan"]
	  }, [_c('text', {
	    staticClass: ["ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("扫一扫")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["notice"]
	  }, [_c('text', {
	    staticClass: ["ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("消息")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(80)
	)

	/* script */
	__vue_exports__ = __webpack_require__(81)

	/* template */
	var __vue_template__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/refresh.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d96da158"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = {
	  "u-refresh": {
	    "height": 170,
	    "width": 750,
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "center"
	  },
	  "loading-bg": {
	    "position": "absolute",
	    "left": 250,
	    "marginTop": 40,
	    "width": 250,
	    "height": 120
	  },
	  "l-txt-box": {
	    "height": 106,
	    "width": 200,
	    "overflow": "hidden"
	  },
	  "l-txt": {
	    "height": 30,
	    "width": 30,
	    "fontSize": 25,
	    "position": "absolute",
	    "top": 105,
	    "left": 87,
	    "color": "#666666"
	  }
	}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');
	exports.default = {
	    props: [],
	    data: function data() {
	        return {
	            refreshing: false,
	            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
	        };
	    },

	    methods: {
	        loadingAni: function loadingAni() {
	            for (var i = 0; i < this.loadingAR.length; i++) {
	                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
	            }
	        },
	        loadingAniDown: function loadingAniDown() {
	            for (var i = 0; i < this.loadingAR.length; i++) {
	                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
	            }
	            this.$emit('loadingDown', {
	                status: 'loadingDown'
	            });
	        },
	        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
	            animation.transition(_ref, {
	                styles: {
	                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
	                },
	                duration: _duration | 500, //ms
	                timingFunction: 'ease-out',
	                delay: _delay | 0 //ms
	            }, function () {
	                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
	            }.bind(this));
	        },
	        onrefresh: function onrefresh(event) {
	            var _this = this;

	            //                console.log('is refreshing')
	            modal.toast({ message: 'refresh', duration: 1 });

	            this.loadingAni();
	            this.refreshing = true;
	            setTimeout(function () {
	                _this.refreshing = false;
	                _this.loadingAniDown();
	            }, 1300);
	        },
	        onpullingdown: function onpullingdown(event) {}
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('refresh', {
	    staticClass: ["u-refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('image', {
	    staticClass: ["loading-bg"],
	    attrs: {
	      "resize": "contain",
	      "src": "http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"
	    }
	  }), _c('div', {
	    staticClass: ["l-txt-box"]
	  }, [_c('text', {
	    ref: "lTxt1",
	    staticClass: ["l-txt", "l-txt-1"]
	  }, [_vm._v("好")]), _c('text', {
	    ref: "lTxt2",
	    staticClass: ["l-txt", "l-txt-2"]
	  }, [_vm._v("的")]), _c('text', {
	    ref: "lTxt3",
	    staticClass: ["l-txt", "l-txt-3"]
	  }, [_vm._v("生")]), _c('text', {
	    ref: "lTxt4",
	    staticClass: ["l-txt", "l-txt-4"]
	  }, [_vm._v("活")]), _c('text', {
	    ref: "lTxt5",
	    staticClass: ["l-txt", "l-txt-5"]
	  }, [_vm._v("没")]), _c('text', {
	    ref: "lTxt6",
	    staticClass: ["l-txt", "l-txt-6"]
	  }, [_vm._v("那")]), _c('text', {
	    ref: "lTxt7",
	    staticClass: ["l-txt", "l-txt-7"]
	  }, [_vm._v("么")]), _c('text', {
	    ref: "lTxt8",
	    staticClass: ["l-txt", "l-txt-8"]
	  }, [_vm._v("贵")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(84)
	)

	/* script */
	__vue_exports__ = __webpack_require__(85)

	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/topChannel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4e9be2f6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "position": "fixed",
	    "top": 114,
	    "left": 0,
	    "right": 0,
	    "height": 54,
	    "zIndex": 10,
	    "backgroundColor": "#fafafa",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d9d9d9"
	  },
	  "scroller": {
	    "height": 54
	  },
	  "i-c": {
	    "paddingTop": 10,
	    "paddingLeft": 45,
	    "paddingRight": 45,
	    "paddingBottom": 6,
	    "fontSize": 26,
	    "color": "#333333"
	  },
	  "c-act": {
	    "color": "#b4282d"
	  },
	  "j-uline": {
	    "position": "absolute",
	    "left": 30,
	    "bottom": 0,
	    "width": 82,
	    "height": 4,
	    "backgroundColor": "#b4282d"
	  },
	  "more": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "height": 52,
	    "width": 100,
	    "backgroundColor": "#fafafa",
	    "textAlign": "center",
	    "paddingTop": 10,
	    "opacity": 0.96,
	    "boxShadow": "-6px -4px 4px #fafafa"
	  }
	}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');
	exports.default = {
	    data: function data() {
	        return {
	            jLPosition: "left:30px;width:82px;"
	        };
	    },
	    mounted: function mounted() {
	        //            this.initJLine();
	    },

	    methods: {
	        initJLine: function initJLine() {
	            if (!this.$refs.actJC) return;
	            //                let l = this.$refs.actJC.$el.offsetLeft;
	            //                let w = this.$refs.actJC.$el.offsetWidth;
	            //                this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
	        },

	        chooseChannel: function chooseChannel(event) {
	            var _target = event.target;
	            //                console.log(_target);
	            //                if(_target.dataset.act !== "j-c") return;
	            var l = _target.offsetLeft || 0;
	            var w = _target.offsetWidth || 0;
	            if (w <= 0) return;
	            //                this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
	            animation.transition(this.$refs.jcLine, {
	                styles: {
	                    left: l + 30 + "px",
	                    width: w - 60 + "px"
	                },
	                duration: 300, //ms
	                timingFunction: 'ease',
	                delay: 0 //ms
	            }, function () {});
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "flexDirection": "row",
	      "loadmoreoffset": "750px",
	      "showScrollbar": "false"
	    },
	    on: {
	      "click": _vm.chooseChannel
	    }
	  }, [_c('div', {
	    ref: "jcLine",
	    staticClass: ["j-uline"],
	    style: _vm.jLPosition
	  }), _c('text', {
	    ref: "actJC",
	    staticClass: ["i-c", "c-act"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("推荐")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("限时购")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("新品")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("居家")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("餐厨")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("配件")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("服装")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("电器")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("洗护")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("杂货")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("饮食")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("婴童")]), _c('text', {
	    staticClass: ["i-c"],
	    attrs: {
	      "jact": "true"
	    }
	  }, [_vm._v("志趣")])]), _c('text', {
	    staticClass: ["more", "iconfont"]
	  }, [_vm._v("")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(88)
	)

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/YXSlider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6f5ebc37"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "image": {
	    "width": 750,
	    "height": 430
	  },
	  "slider": {
	    "width": 750,
	    "height": 430
	  },
	  "frame": {
	    "width": 750,
	    "height": 430,
	    "position": "relative"
	  },
	  "indicator": {
	    "width": 750,
	    "height": 40,
	    "itemColor": "white",
	    "itemSelectedColor": "#b4282d",
	    "itemSize": 12,
	    "position": "absolute",
	    "bottom": 10,
	    "right": 0
	  }
	}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ["imageList"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        onchange: function onchange(event) {}
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "autoPlay": "true",
	      "interval": "5000"
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, [_vm._l((_vm.imageList), function(img) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "resize": "cover",
	        "src": img.src
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(92)
	)

	/* script */
	__vue_exports__ = __webpack_require__(93)

	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Block1.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e3134b0a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 6
	  },
	  "tlt": {
	    "textAlign": "center",
	    "fontSize": 30,
	    "marginTop": 30,
	    "marginBottom": 26,
	    "color": "#333333"
	  },
	  "box": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "center",
	    "width": 750
	  },
	  "box-item": {
	    "width": 350,
	    "height": 226,
	    "margin": 5,
	    "padding": 20,
	    "backgroundColor": "#efefef"
	  },
	  "i-name": {
	    "position": "relative",
	    "color": "#333333",
	    "fontSize": 28,
	    "width": 300
	  },
	  "i-price": {
	    "position": "relative",
	    "marginTop": 10,
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "i-price-n": {
	    "color": "#333333",
	    "fontSize": 36
	  },
	  "i-price-t": {
	    "color": "#333333",
	    "fontSize": 24,
	    "marginTop": 12
	  },
	  "i-state": {
	    "position": "relative",
	    "fontSize": 20,
	    "color": "#b8a989",
	    "width": 70,
	    "marginTop": 10,
	    "padding": 5,
	    "lineHeight": 20,
	    "textAlign": "center",
	    "borderWidth": 1,
	    "borderColor": "#b8a989",
	    "borderRadius": 4
	  },
	  "i-image": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 350,
	    "height": 226
	  }
	}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["title", "items"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            if (!_url) return;
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["tlt", "iconfont"]
	  }, [_vm._v(_vm._s(_vm.title) + " ")]), _c('div', {
	    staticClass: ["box"]
	  }, _vm._l((_vm.items), function(i) {
	    return _c('div', {
	      staticClass: ["box-item"],
	      on: {
	        "click": function($event) {
	          _vm.jumpWeb(i.url)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["i-image"],
	      attrs: {
	        "resize": "cover",
	        "src": i.bg
	      }
	    }), _c('text', {
	      staticClass: ["i-name"]
	    }, [_vm._v(_vm._s(i.name))]), _c('div', {
	      staticClass: ["i-price"]
	    }, [_c('text', {
	      staticClass: ["i-price-n"]
	    }, [_vm._v(_vm._s(i.price))]), _c('text', {
	      staticClass: ["i-price-t"]
	    }, [_vm._v("元起")])]), (i.state) ? _c('text', {
	      staticClass: ["i-state"]
	    }, [_vm._v(_vm._s(i.state))]) : _vm._e()])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(96)
	)

	/* script */
	__vue_exports__ = __webpack_require__(97)

	/* template */
	var __vue_template__ = __webpack_require__(98)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Block2.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2f71c08"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 6
	  },
	  "tlt-box": {
	    "height": 260,
	    "width": 750,
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "tlt": {
	    "marginTop": 76,
	    "textAlign": "center",
	    "fontSize": 34,
	    "color": "#8BA0B6"
	  },
	  "tlt-hot": {
	    "color": "#B4A078"
	  },
	  "btn-all": {
	    "textAlign": "center",
	    "fontSize": 26,
	    "width": 220,
	    "padding": 10,
	    "marginTop": 20,
	    "color": "#8BA0B6",
	    "borderRadius": 4,
	    "backgroundColor": "#D8E5F1"
	  },
	  "btn-hot": {
	    "color": "#B4A078",
	    "backgroundColor": "#F4E9CB"
	  },
	  "tlt-image": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "box": {
	    "width": 750,
	    "height": 500,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "i-good": {
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "gd-img": {
	    "height": 286,
	    "width": 286,
	    "backgroundColor": "#f4f4f4"
	  },
	  "gd-tlt": {
	    "fontSize": 28,
	    "color": "#333333",
	    "width": 286,
	    "marginTop": 16,
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-info": {
	    "display": "block",
	    "fontSize": 24,
	    "width": 286,
	    "marginTop": 8,
	    "color": "#7f7f7f",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-price": {
	    "fontSize": 28,
	    "width": 286,
	    "marginTop": 16,
	    "color": "#b4282d",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-more": {
	    "height": 286,
	    "width": 286,
	    "fontSize": 28,
	    "lineHeight": 40,
	    "borderWidth": 6,
	    "paddingTop": 120,
	    "paddingBottom": 120,
	    "borderColor": "#f4f4f4",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["newGoods", "hotGoods", "head", "hasMore", "goods"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            if (!_url) return;
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [(_vm.newGoods) ? _c('div', {
	    staticClass: ["tlt-box"]
	  }, [_c('image', {
	    staticClass: ["tlt-image"],
	    attrs: {
	      "resize": "cover",
	      "src": "http://doc.zwwill.com/yanxuan/imgs/bg-new.png"
	    }
	  }), _c('text', {
	    staticClass: ["tlt", "tlt-new"]
	  }, [_vm._v(_vm._s(_vm.head.tlt))]), _c('text', {
	    staticClass: ["btn-all", "btn-new"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb(_vm.head.url)
	      }
	    }
	  }, [_vm._v("查看全部 >")])]) : (_vm.hotGoods) ? _c('div', {
	    staticClass: ["tlt-box"]
	  }, [_c('image', {
	    staticClass: ["tlt-image"],
	    attrs: {
	      "resize": "cover",
	      "src": "http://doc.zwwill.com/yanxuan/imgs/bg-hot.png"
	    }
	  }), _c('text', {
	    staticClass: ["tlt", "tlt-hot"]
	  }, [_vm._v(_vm._s(_vm.head.tlt))]), _c('text', {
	    staticClass: ["btn-all", "btn-hot"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb(_vm.head.url)
	      }
	    }
	  }, [_vm._v("查看全部 >")])]) : _vm._e(), _c('scroller', {
	    staticClass: ["box"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "flexDirection": "row",
	      "showScrollbar": "false"
	    }
	  }, [_vm._l((_vm.goods), function(i) {
	    return _c('div', {
	      staticClass: ["i-good"]
	    }, [_c('image', {
	      staticClass: ["gd-img"],
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["gd-tlt"]
	    }, [_vm._v(_vm._s(i.tlt))]), _c('text', {
	      staticClass: ["gd-info"]
	    }, [_vm._v(_vm._s(i.info))]), _c('text', {
	      staticClass: ["gd-price"]
	    }, [_vm._v("¥" + _vm._s(i.price))])])
	  }), (_vm.hasMore) ? _c('div', {
	    staticClass: ["i-good"]
	  }, [_c('text', {
	    staticClass: ["gd-more"]
	  }, [_vm._v("查看全部")])]) : _vm._e()], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(100)
	)

	/* script */
	__vue_exports__ = __webpack_require__(101)

	/* template */
	var __vue_template__ = __webpack_require__(102)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Block3.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2daed06"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 10,
	    "paddingTop": 26,
	    "width": 750
	  },
	  "tlt": {
	    "textAlign": "center",
	    "color": "#333333",
	    "width": 750,
	    "padding": 10,
	    "fontSize": 30
	  },
	  "gb-box": {
	    "padding": 16,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "space-between"
	  },
	  "i-gd": {
	    "width": 350,
	    "height": 510,
	    "marginBottom": 20
	  },
	  "gd-img": {
	    "width": 350,
	    "height": 350,
	    "backgroundColor": "#f4f4f4"
	  },
	  "gd-tlt": {
	    "fontSize": 28,
	    "color": "#333333",
	    "width": 350,
	    "marginTop": 15,
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-info": {
	    "display": "block",
	    "fontSize": 28,
	    "width": 350,
	    "height": 65,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "color": "#9F8A60",
	    "backgroundColor": "#F1ECE2",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-price": {
	    "fontSize": 28,
	    "width": 350,
	    "marginTop": 10,
	    "color": "#b4282d",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["newGoods", "hotGoods", "head", "hasMore", "goods"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            if (!_url) _url = 'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["tlt"]
	  }, [_vm._v("猜你喜欢")]), _c('div', {
	    staticClass: ["gb-box"]
	  }, _vm._l((_vm.goods), function(i) {
	    return _c('div', {
	      staticClass: ["i-gd"],
	      on: {
	        "click": function($event) {
	          _vm.jumpWeb(i.url)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["gd-img"],
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["gd-info"]
	    }, [_vm._v(_vm._s(i.info))]), _c('text', {
	      staticClass: ["gd-tlt"]
	    }, [_vm._v(_vm._s(i.tlt))]), _c('text', {
	      staticClass: ["gd-price"]
	    }, [_vm._v("¥" + _vm._s(i.price))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('home-header'), _c('top-channel'), _c('scroller', {
	    staticClass: ["main-list"],
	    attrs: {
	      "offsetAccuracy": "300px"
	    }
	  }, [_c('refresher', {
	    on: {
	      "loadingDown": _vm.loadingDown
	    }
	  }), _c('div', {
	    staticClass: ["cell-button"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('https://m.you.163.com/act/pub/DxDpYNfbBd.html')
	      }
	    }
	  }, [_c('yx-slider', {
	    attrs: {
	      "imageList": _vm.YXBanners
	    }
	  }), _vm._m(0)], 1), _c('div', {
	    staticClass: ["cell-button"]
	  }, [_c('block-1', {
	    attrs: {
	      "title": _vm.block1.title,
	      "items": _vm.block1.items
	    }
	  })], 1), _c('div', {
	    staticClass: ["cell-button"]
	  }, [_c('block-2', {
	    attrs: {
	      "hasMore": "true",
	      "newGoods": "true",
	      "head": _vm.head1,
	      "goods": _vm.goods1
	    }
	  })], 1), _c('div', {
	    staticClass: ["cell-button"]
	  }, [_c('block-2', {
	    attrs: {
	      "hasMore": "true",
	      "hotGoods": "true",
	      "head": _vm.head2,
	      "goods": _vm.goods2
	    }
	  })], 1), _c('div', {
	    staticClass: ["cell-button"]
	  }, [_c('block-3', {
	    attrs: {
	      "goods": _vm.goods3
	    }
	  })], 1), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("...")])])], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["slogan"]
	  }, [_c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 网易自营品牌")]), _c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 30天无忧退货")]), _c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 48小时快速退款")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(105)
	)

	/* script */
	__vue_exports__ = __webpack_require__(106)

	/* template */
	var __vue_template__ = __webpack_require__(119)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/views/topic.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-af7b0368"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#f4f4f4"
	  },
	  "main-list": {
	    "marginTop": 113,
	    "marginBottom": 90
	  },
	  "cell-button": {
	    "paddingBottom": 18
	  }
	}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _Header = __webpack_require__(107);

	var _Header2 = _interopRequireDefault(_Header);

	var _refresh = __webpack_require__(79);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _Block = __webpack_require__(111);

	var _Block2 = _interopRequireDefault(_Block);

	var _Block3 = __webpack_require__(115);

	var _Block4 = _interopRequireDefault(_Block3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            topics: [{ name: '严选look', img: 'https://yanxuan.nosdn.127.net/15030393722652401.jpg' }, { name: '严选推荐', img: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg' }, { name: '挑款师推荐', img: 'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png' }, { name: '丁磊私物推荐', img: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg' }],
	            articles: [{ auther: '严选推荐', autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64', tlt: '年中扫一扫，下半年运势好', info: '6个家庭清洁小技巧', price: '6.9', img: 'http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg' }, { auther: '服装组：小服', autherImg: 'https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64', tlt: '小姐姐们的运动衣提前上架啦', info: '前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。大家的...', price: '', img: ['https://yanxuan.nosdn.127.net/15041772896010423.jpg', 'https://yanxuan.nosdn.127.net/15041772789070419.jpg', 'https://yanxuan.nosdn.127.net/15041772808640420.jpg'] }, { auther: '居家组：朵朵', autherImg: 'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64', tlt: '初秋，最想用它来裸睡', info: '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...', price: '', img: ['https://yanxuan.nosdn.127.net/15040927525260414.jpg', 'https://yanxuan.nosdn.127.net/15040927586650416.jpg', 'https://yanxuan.nosdn.127.net/15040927556820415.jpg'] }, { auther: '严选推荐', autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64', tlt: '不为繁华易匠心', info: '那些值得珍藏的严选手作好物', price: '29', img: 'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg' }]
	        };
	    },

	    components: {
	        'header2': _Header2.default,
	        'refresher': _refresh2.default,
	        'block-4': _Block2.default,
	        'block-5': _Block4.default
	    },
	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(108)
	)

	/* script */
	__vue_exports__ = __webpack_require__(109)

	/* template */
	var __vue_template__ = __webpack_require__(110)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Header2.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e52122c4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 114,
	    "paddingTop": 44,
	    "backgroundColor": "#fafafa",
	    "opacity": 0.99,
	    "zIndex": 101,
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d9d9d9"
	  },
	  "tlt": {
	    "flex": 1,
	    "fontSize": 36,
	    "paddingTop": 10,
	    "color": "#333333",
	    "textAlign": "center"
	  },
	  "left": {
	    "height": 80,
	    "width": 120,
	    "paddingTop": 10
	  },
	  "right": {
	    "height": 80,
	    "width": 120,
	    "paddingTop": 10
	  },
	  "leftTxt": {
	    "fontSize": 30,
	    "textAlign": "center"
	  },
	  "rightTxt": {
	    "fontSize": 30,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['title', 'leftBtn', 'rightBtn'],
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};
	module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["left"]
	  }, [(_vm.leftBtn) ? _c('text', {
	    staticClass: ["leftTxt"]
	  }, [_vm._v(_vm._s(_vm.leftBtn.name))]) : _vm._e()]), _c('text', {
	    staticClass: ["tlt"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["right"]
	  }, [(_vm.rightBtn) ? _c('text', {
	    staticClass: ["rightTxt"]
	  }, [_vm._v(_vm._s(_vm.rightBtn.name))]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(112)
	)

	/* script */
	__vue_exports__ = __webpack_require__(113)

	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Block4.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2bebe04"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff"
	  },
	  "tp-box": {
	    "height": 200,
	    "padding": 20
	  },
	  "i-tp": {
	    "width": 275,
	    "height": 150,
	    "margin": 10
	  },
	  "tp-img": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 275,
	    "height": 150,
	    "borderRadius": 10,
	    "backgroundColor": "#f4f4f4"
	  },
	  "tp-name": {
	    "fontSize": 28,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginTop": 57,
	    "overflow": "hidden",
	    "textAlign": "center",
	    "color": "#ffffff",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ["topics"],
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};
	module.exports = exports["default"];

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["tp-box"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "flexDirection": "row",
	      "showScrollbar": "false"
	    }
	  }, _vm._l((_vm.topics), function(i) {
	    return _c('div', {
	      staticClass: ["i-tp"]
	    }, [_c('image', {
	      staticClass: ["tp-img"],
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["tp-name"]
	    }, [_vm._v(_vm._s(i.name))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(116)
	)

	/* script */
	__vue_exports__ = __webpack_require__(117)

	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Block5.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2a28f02"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "auther-box": {
	    "height": 75,
	    "paddingTop": 10,
	    "paddingLeft": 25,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row"
	  },
	  "auther-img": {
	    "height": 58,
	    "width": 58,
	    "borderRadius": 58
	  },
	  "auther-name": {
	    "flex": 1,
	    "fontSize": 26,
	    "height": 58,
	    "paddingLeft": 20,
	    "paddingTop": 10
	  },
	  "img-box": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap"
	  },
	  "main-img": {
	    "flex": 1,
	    "height": 380
	  },
	  "sub-imgs-box": {
	    "width": 190,
	    "height": 380
	  },
	  "sub-img": {
	    "height": 188,
	    "width": 190,
	    "marginLeft": 3,
	    "marginBottom": 3
	  },
	  "tlt-box": {
	    "height": 80,
	    "padding": 20,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row"
	  },
	  "tlt": {
	    "fontSize": 34,
	    "flex": 1,
	    "overflow": "hidden",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "price": {
	    "fontSize": 34,
	    "color": "#b4282d",
	    "paddingLeft": 10
	  },
	  "info": {
	    "fontSize": 26,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "overflow": "hidden",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "color": "#666666"
	  }
	}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["article", "url"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            if (!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb(_vm.url)
	      }
	    }
	  }, [_c('div', {
	    staticClass: ["auther-box"]
	  }, [_c('image', {
	    staticClass: ["auther-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.autherImg
	    }
	  }), _c('text', {
	    staticClass: ["auther-name"]
	  }, [_vm._v(_vm._s(_vm.article.auther))])]), _c('div', {
	    staticClass: ["img-box"]
	  }, [(typeof _vm.article.img == 'string') ? [_c('image', {
	    staticClass: ["main-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img
	    }
	  })] : (typeof _vm.article.img == 'object' && _vm.article.img.length >= 3) ? [_c('image', {
	    staticClass: ["main-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[0]
	    }
	  }), _c('div', {
	    staticClass: ["sub-imgs-box"]
	  }, [_c('image', {
	    staticClass: ["sub-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[1]
	    }
	  }), _c('image', {
	    staticClass: ["sub-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[2]
	    }
	  })])] : _vm._e()], 2), _c('div', {
	    staticClass: ["tlt-box"]
	  }, [_c('text', {
	    staticClass: ["tlt"]
	  }, [_vm._v(_vm._s(_vm.article.tlt))]), (_vm.article.price) ? _c('text', {
	    staticClass: ["price"]
	  }, [_vm._v(_vm._s(_vm.article.price) + "元起")]) : _vm._e()]), _c('text', {
	    staticClass: ["info"]
	  }, [_vm._v(_vm._s(_vm.article.info))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('header2', {
	    attrs: {
	      "title": "专题"
	    }
	  }), _c('scroller', {
	    staticClass: ["main-list"],
	    attrs: {
	      "offsetAccuracy": "300px"
	    }
	  }, [_c('refresher'), _c('div', {
	    staticClass: ["cell-button"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('http://m.you.163.com/topic/v1/look/list')
	      }
	    }
	  }, [_c('block-4', {
	    attrs: {
	      "topics": _vm.topics
	    }
	  })], 1), _vm._l((_vm.articles), function(ar) {
	    return _c('div', {
	      staticClass: ["cell-button"]
	    }, [_c('block-5', {
	      attrs: {
	        "article": ar,
	        "url": ""
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(121)
	)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(127)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/views/class.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-deefe3d6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#f4f4f4",
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row"
	  },
	  "class-list": {
	    "width": 162,
	    "marginTop": 113,
	    "marginBottom": 90,
	    "paddingTop": 20,
	    "borderRightWidth": 1,
	    "borderRightColor": "#d9d9d9",
	    "backgroundColor": "#ffffff"
	  },
	  "class-txt": {
	    "fontSize": 28,
	    "marginTop": 22,
	    "marginBottom": 26,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "textAlign": "center",
	    "color": "#333333"
	  },
	  "main-list": {
	    "flex": 1,
	    "display": "flex",
	    "flexDirection": "column",
	    "flexWrap": "nowrap",
	    "marginTop": 113,
	    "marginBottom": 90,
	    "backgroundColor": "#ffffff"
	  },
	  "ad-img": {
	    "width": 532,
	    "height": 194,
	    "borderRadius": 6,
	    "margin": 28
	  },
	  "sub-tlt": {
	    "textAlign": "center",
	    "fontSize": 24,
	    "color": "#333333",
	    "marginTop": 10,
	    "marginBottom": 30
	  },
	  "sub-box": {
	    "paddingLeft": 26,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "wrap"
	  },
	  "sub-i": {
	    "width": 178,
	    "height": 200
	  },
	  "i-img": {
	    "width": 150,
	    "marginLeft": 14,
	    "marginRight": 14,
	    "height": 150
	  },
	  "i-name": {
	    "fontSize": 22,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _refresh = __webpack_require__(79);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _Header = __webpack_require__(123);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {
	        'refresher': _refresh2.default,
	        'header3': _Header2.default
	    },
	    data: function data() {
	        return {
	            classes: ['推荐区', '家装区', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
	            subclasses: [{ name: '中秋系列', img: 'http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&quality=85&thumbnail=144x144' }, { name: '超值套装', img: 'http://yanxuan.nosdn.127.net/bd6f7deba69c8af2f6bb80025d7b98de.png?imageView&quality=85&thumbnail=144x144' }, { name: '热卖爆品', img: 'http://yanxuan.nosdn.127.net/c3418cc60d3968263c5b2ac7fb153c34.png?imageView&quality=85&thumbnail=144x144' }, { name: '999+好评', img: 'http://yanxuan.nosdn.127.net/87d1cb1bc196c5775b17788aea1c2239.png?imageView&quality=85&thumbnail=144x144' }, { name: 'boss推荐', img: 'http://yanxuan.nosdn.127.net/fbee769af73c0f63f6120eb27ff3ce96.png?imageView&quality=85&thumbnail=144x144' }, { name: '明星推荐', img: 'http://yanxuan.nosdn.127.net/7dea8f7e0e706804c3307504e2e7c463.png?imageView&quality=85&thumbnail=144x144' }, { name: '黑凤梨系列', img: 'http://yanxuan.nosdn.127.net/a4a14669ce1fa497aece9a20c669196e.png?imageView&quality=85&thumbnail=144x144' }, { name: '趣味粉系列', img: 'http://yanxuan.nosdn.127.net/87fc01e5876482d521ecca13aea42653.png?imageView&quality=85&thumbnail=144x144' }]
	        };
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(124)
	)

	/* script */
	__vue_exports__ = __webpack_require__(125)

	/* template */
	var __vue_template__ = __webpack_require__(126)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/Header3.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e504f3c2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 114,
	    "paddingTop": 44,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "zIndex": 101,
	    "backgroundColor": "#fafafa",
	    "opacity": 0.99,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d9d9d9"
	  },
	  "search": {
	    "flex": 1,
	    "height": 60,
	    "fontSize": 26,
	    "paddingTop": 13,
	    "backgroundColor": "#ededed",
	    "borderRadius": 8,
	    "marginRight": 26,
	    "marginLeft": 26,
	    "textAlign": "center",
	    "color": "#666666"
	  }
	}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {};
	    },
	    created: function created() {},

	    methods: {}
	};
	module.exports = exports["default"];

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["search", "iconfont"]
	  }, [_vm._v(" 搜索商品，共8888款好物")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('header3'), _c('div', {
	    staticClass: ["class-list"]
	  }, [_c('scroller', _vm._l((_vm.classes), function(i) {
	    return _c('text', {
	      staticClass: ["class-txt"]
	    }, [_vm._v(_vm._s(i))])
	  }))]), _c('scroller', {
	    staticClass: ["main-list"],
	    attrs: {
	      "offsetAccuracy": "300px"
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": "hide"
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("Refreshing ...")])]), _c('image', {
	    staticClass: ["ad-img"],
	    attrs: {
	      "resize": "cover",
	      "src": "http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"
	    }
	  }), _c('text', {
	    staticClass: ["sub-tlt"]
	  }, [_vm._v(" --- 推荐区分类 --- ")]), _c('div', {
	    staticClass: ["sub-box"]
	  }, _vm._l((_vm.subclasses), function(i) {
	    return _c('div', {
	      staticClass: ["sub-i"],
	      on: {
	        "click": function($event) {
	          _vm.jumpWeb('http%3A%2F%2Fm.you.163.com%2Fitem%2Flist%3FcategoryId%3D1022001%26subCategoryId%3D1040031')
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["i-img"],
	      attrs: {
	        "resize": "contain",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["i-name"]
	    }, [_vm._v(_vm._s(i.name))])])
	  }))], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(129)
	)

	/* script */
	__vue_exports__ = __webpack_require__(130)

	/* template */
	var __vue_template__ = __webpack_require__(131)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/views/shop.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8306c02e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#f4f4f4"
	  },
	  "main-list": {
	    "marginTop": 170,
	    "marginBottom": 90
	  },
	  "slogan": {
	    "position": "absolute",
	    "top": 110,
	    "width": 750,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap"
	  },
	  "i-slg": {
	    "height": 66,
	    "fontSize": 26,
	    "paddingTop": 16,
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#b4282d"
	  },
	  "cart-empty": {
	    "height": 350
	  },
	  "img-empty": {
	    "position": "absolute",
	    "width": 750,
	    "height": 230,
	    "top": 20,
	    "left": 0
	  },
	  "txt-empty": {
	    "position": "absolute",
	    "textAlign": "center",
	    "fontSize": 30,
	    "width": 750,
	    "top": 250,
	    "color": "#999999"
	  }
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Header = __webpack_require__(107);

	var _Header2 = _interopRequireDefault(_Header);

	var _Block = __webpack_require__(99);

	var _Block2 = _interopRequireDefault(_Block);

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _refresh = __webpack_require__(79);

	var _refresh2 = _interopRequireDefault(_refresh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {
	        'header4': _Header2.default,
	        'refresher': _refresh2.default,
	        'block-3': _Block2.default
	    },
	    data: function data() {
	        return {
	            rightBtn: {
	                name: "编辑"
	            },
	            goods3: [{ tlt: "日式和风敞口保温杯", img: "http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330", info: "真空隔热，保温保冷", price: "32" }, { tlt: "切尔西牛皮女靴", img: "http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330", info: "经典牛皮切尔西，时尚帅气", price: "289" }, { tlt: "小馒头 多色双肩包", img: "http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330", info: "奶油色泽，小巧减龄", price: "79" }, { tlt: "全棉色织磨毛四件套", img: "http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330", info: "优雅色织，温暖磨毛", price: "299" }, { tlt: "日式和风声波式电动牙刷", img: "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330", info: "进口刷毛，专利技术", price: "119" }, { tlt: "多功能商务双肩包", img: "http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330", info: "17个功能分区，内置分层收纳", price: "334" }, { tlt: "黑凤梨 20寸PC膜拉链登机箱", img: "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330", info: "热卖9万只，网易人手1只", price: "185" }, { tlt: "日式蓬软太鼓抱枕", img: "http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330", info: "萌趣太鼓造型 软糯轻柔回弹", price: "29" }, { tlt: "可水洗抗菌防螨丝羽绒枕", img: "http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330", info: "进口防螨布，热销50万件", price: "99" }, { tlt: "双宫茧桑蚕丝被 空调被", img: "http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330", info: "一级桑蚕丝，吸湿透气柔软", price: "479" }, { tlt: "怀抱休闲椅组合（皮款）", img: "http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330", info: "葛优躺神器皮款", price: "3999" }, { tlt: "欧式哑光餐具套装", img: "http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330", info: "德化白瓷，坚实耐用", price: "189" }, { tlt: "清新两用杯", img: "http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330", info: "办公杯优选 轻松饮茶", price: "52" }, { tlt: "两带式男/女款拖鞋", img: "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330", info: "鞋杯随脚型而变，舒适呵护", price: "69.9" }],
	            goodList: []
	        };
	    },


	    methods: {}
	};
	module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('header4', {
	    attrs: {
	      "title": "购物车",
	      "rightBtn": _vm.rightBtn
	    }
	  }), _c('div', {
	    staticClass: ["slogan"],
	    on: {
	      "click": function($event) {
	        _vm.jump2($event, 'true')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 30天无忧退换货")]), _c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 48小时快速退款")]), _c('text', {
	    staticClass: ["i-slg", "iconfont"]
	  }, [_vm._v(" 满88元免邮费")])]), _c('scroller', {
	    staticClass: ["main-list"],
	    attrs: {
	      "offsetAccuracy": "300px"
	    }
	  }, [_c('refresher'), _c('div', {
	    staticClass: ["shop-cart"]
	  }, [(!_vm.goodList || _vm.goodList.length <= 0) ? _c('div', {
	    staticClass: ["cart-empty"]
	  }, [_c('image', {
	    staticClass: ["img-empty"],
	    attrs: {
	      "resize": "contain",
	      "src": "http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"
	    }
	  }), _c('text', {
	    staticClass: ["txt-empty"]
	  }, [_vm._v("去添加点什么吧")])]) : _vm._e()]), _c('block-3', {
	    attrs: {
	      "goods": _vm.goods3
	    }
	  })], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(133)
	)

	/* script */
	__vue_exports__ = __webpack_require__(134)

	/* template */
	var __vue_template__ = __webpack_require__(135)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/views/my.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b4efbb42"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#f4f4f4"
	  },
	  "cell-button": {
	    "marginBottom": 18
	  },
	  "header": {
	    "height": 280
	  },
	  "header-bg": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 280
	  },
	  "i-photo": {
	    "position": "absolute",
	    "top": 90,
	    "left": 30,
	    "height": 130,
	    "width": 130,
	    "borderRadius": 130
	  },
	  "i-name": {
	    "position": "absolute",
	    "top": 110,
	    "left": 190,
	    "height": 50,
	    "width": 300,
	    "fontSize": 38,
	    "color": "#ffffff"
	  },
	  "b-tlt": {
	    "position": "absolute",
	    "top": 170,
	    "left": 190,
	    "height": 40,
	    "width": 350,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap"
	  },
	  "i-tag": {
	    "width": 30,
	    "height": 30,
	    "fontSize": 24,
	    "paddingTop": 2,
	    "marginRight": 6,
	    "borderRadius": 4
	  },
	  "tag-e": {
	    "width": 32,
	    "height": 32
	  },
	  "tag-v8": {
	    "color": "#ffffff",
	    "backgroundColor": "#b29e75",
	    "textAlign": "center"
	  },
	  "txt-tag": {
	    "color": "#b4a078",
	    "flex": 1,
	    "height": 40,
	    "fontSize": 28,
	    "overflow": "hidden",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "b-qrcode": {
	    "position": "absolute",
	    "top": 120,
	    "right": 40,
	    "height": 80,
	    "width": 80,
	    "borderRadius": 70,
	    "textAlign": "center",
	    "fontSize": 40,
	    "paddingTop": 18,
	    "color": "#ffffff",
	    "backgroundColor": "rgba(255,255,255,0.3)"
	  },
	  "s-box": {
	    "paddingLeft": 26,
	    "backgroundColor": "#ffffff"
	  },
	  "box-tlt": {
	    "height": 94
	  },
	  "box-txt": {
	    "fontSize": 26,
	    "paddingTop": 34,
	    "color": "#333333"
	  },
	  "i-box-in": {
	    "position": "absolute",
	    "top": 34,
	    "right": 30,
	    "color": "#333333"
	  },
	  "box-line": {
	    "height": 132,
	    "display": "flex",
	    "paddingRight": 30,
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "i-box-l": {
	    "width": 130,
	    "height": 132
	  },
	  "i-box-icon": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "paddingTop": 15,
	    "height": 79,
	    "paddingBottom": 10,
	    "color": "#666666"
	  },
	  "i-box-tlt": {
	    "fontSize": 26,
	    "textAlign": "center",
	    "color": "#666666"
	  },
	  "line-serve": {
	    "paddingTop": 20,
	    "height": 150
	  },
	  "border-bottom": {
	    "borderBottomWidth": 1,
	    "borderBottomColor": "rgba(0,0,0,0.15)"
	  },
	  "i-c-orange": {
	    "color": "#ff744d"
	  },
	  "i-c-yellow": {
	    "color": "#f6a121"
	  },
	  "i-c-blue": {
	    "color": "#689de5"
	  }
	}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _Block = __webpack_require__(91);

	var _Block2 = _interopRequireDefault(_Block);

	var _Header = __webpack_require__(75);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {};
	    },

	    components: {
	        'block-1': _Block2.default,
	        'home-header': _Header2.default
	    },
	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            var url = this.$getConfig().bundleUrl;
	            navigator.push({
	                url: _util2.default.setBundleUrl(url, 'page/web.js?weburl=' + _url),
	                animated: "true"
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["header"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('http://m.you.163.com/ucenter')
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["header-bg"],
	    attrs: {
	      "resize": "cover",
	      "src": "http://yanxuan.nosdn.127.net/6ae93353e95b3450a2710bb43f925a63.jpg"
	    }
	  }), _c('image', {
	    staticClass: ["i-photo"],
	    attrs: {
	      "resize": "cover",
	      "src": "http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["i-name"]
	  }, [_vm._v("zwwill7")]), _vm._m(0), _c('text', {
	    staticClass: ["b-qrcode", "iconfont"]
	  }, [_vm._v("")])]), _vm._m(1), _c('div', {
	    staticClass: ["s-box"]
	  }, [_vm._m(2), _c('div', {
	    staticClass: ["box-line", "line-serve", "border-bottom"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('https://id.163.com/gj/m/')
	      }
	    }
	  }, [_vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)]), _c('div', {
	    staticClass: ["box-line", "line-serve", "border-bottom"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('https://gj.reg.163.com/faq/')
	      }
	    }
	  }, [_vm._m(7), _vm._m(8), _vm._m(9), _vm._m(10)]), _c('div', {
	    staticClass: ["box-line", "line-serve"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb('http%3A%2F%2Fm.you.163.com%2Fhelp%23%2F%3F_k%3Dyn4ucc')
	      }
	    }
	  }, [_vm._m(11), _vm._m(12), _vm._m(13), _vm._m(14)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["b-tlt"]
	  }, [_c('image', {
	    staticClass: ["i-tag", "tag-e"],
	    attrs: {
	      "resize": "contain",
	      "src": "http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"
	    }
	  }), _c('text', {
	    staticClass: ["i-tag", "tag-v8", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["txt-tag"]
	  }, [_vm._v("品质生活家")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["s-box", "cell-button"]
	  }, [_c('div', {
	    staticClass: ["box-tlt", "border-bottom"]
	  }, [_c('text', {
	    staticClass: ["box-txt"]
	  }, [_vm._v("我的订单")]), _c('text', {
	    staticClass: ["i-box-in", "iconfont"]
	  }, [_vm._v("")])]), _c('div', {
	    staticClass: ["box-line"]
	  }, [_c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("待付款")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("待发货")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("已发货")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("待评价")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("退换/售后")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["box-tlt", "border-bottom"]
	  }, [_c('text', {
	    staticClass: ["box-txt"]
	  }, [_vm._v("我的服务")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("拼团订单")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("邀请好友")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("优惠券")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("优先购")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("礼品卡")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("会员")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("足迹")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("收藏")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("地址")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("客服")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("帮助")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["i-box-tlt"]
	  }, [_vm._v("设置")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);