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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.host = host;
	exports.https = https;
	exports.timeAgo = timeAgo;
	exports.unescape = unescape;
	function host(url) {
	  if (!url) return '';
	  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
	  var parts = host.split('.').slice(-3);
	  if (parts[0] === 'www') parts.shift();
	  return parts.join('.');
	}

	function https(url) {
	  var env = weex.config.env || WXEnvironment;
	  if (env.platform === 'iOS' && typeof url === 'string') {
	    return url.replace(/^http\:/, 'https:');
	  }
	  return url;
	}

	function timeAgo(time) {
	  var between = Date.now() / 1000 - Number(time);
	  if (between < 3600) {
	    return pluralize(~~(between / 60), ' minute');
	  } else if (between < 86400) {
	    return pluralize(~~(between / 3600), ' hour');
	  } else {
	    return pluralize(~~(between / 86400), ' day');
	  }
	}

	function pluralize(time, label) {
	  if (time === 1) {
	    return time + label;
	  }
	  return time + label + 's';
	}

	function unescape(text) {
	  var res = text || '';[['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
	    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
	  });

	  return res;
	}

/***/ })
/******/ ]);