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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_ACTIVE_TYPE = SET_ACTIVE_TYPE;
	exports.SET_LIST = SET_LIST;
	exports.SET_ITEMS = SET_ITEMS;
	exports.SET_USER = SET_USER;
	function SET_ACTIVE_TYPE(state, _ref) {
	  var type = _ref.type;

	  state.activeType = type;
	}

	function SET_LIST(state, _ref2) {
	  var type = _ref2.type,
	      ids = _ref2.ids;

	  state.lists[type] = ids;
	}

	function SET_ITEMS(state, _ref3) {
	  var items = _ref3.items;

	  items.forEach(function (item) {
	    if (item) {
	      Vue.set(state.items, item.id, item);
	    }
	  });
	}

	function SET_USER(state, _ref4) {
	  var user = _ref4.user;

	  Vue.set(state.users, user.id, user);
	}

/***/ })
/******/ ]);