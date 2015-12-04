!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.example=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// A silly little module. It's just here to demonstrate that modules work.

(function() {
	"use strict";

	exports.REQUIRED_FIELD_CLASS = "example-required";

}());
},{}],2:[function(require,module,exports){
// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

// A silly little validator function. Just an example.

(function() {
	"use strict";

	var constants = require("./constants.js");

	exports.validateTextField = function validateTextField(field) {
		if (field.value) {
			field.removeAttribute("class");
		}
		else {
			field.setAttribute("class", constants.REQUIRED_FIELD_CLASS);
		}
	};

}());

},{"./constants.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xpZW50L2NvbnN0YW50cy5qcyIsInNyYy9jbGllbnQvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE1IFRpdGFuaXVtIEkuVC4gTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBGb3IgbGljZW5zZSwgc2VlIFwiUkVBRE1FXCIgb3IgXCJMSUNFTlNFXCIgZmlsZS5cblxuLy8gQSBzaWxseSBsaXR0bGUgbW9kdWxlLiBJdCdzIGp1c3QgaGVyZSB0byBkZW1vbnN0cmF0ZSB0aGF0IG1vZHVsZXMgd29yay5cblxuKGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzLlJFUVVJUkVEX0ZJRUxEX0NMQVNTID0gXCJleGFtcGxlLXJlcXVpcmVkXCI7XG5cbn0oKSk7IiwiLy8gQ29weXJpZ2h0IChjKSAyMDEyIFRpdGFuaXVtIEkuVC4gTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBTZWUgTElDRU5TRS50eHQgZm9yIGRldGFpbHMuXG5cbi8vIEEgc2lsbHkgbGl0dGxlIHZhbGlkYXRvciBmdW5jdGlvbi4gSnVzdCBhbiBleGFtcGxlLlxuXG4oZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBjb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG5cblx0ZXhwb3J0cy52YWxpZGF0ZVRleHRGaWVsZCA9IGZ1bmN0aW9uIHZhbGlkYXRlVGV4dEZpZWxkKGZpZWxkKSB7XG5cdFx0aWYgKGZpZWxkLnZhbHVlKSB7XG5cdFx0XHRmaWVsZC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRmaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjb25zdGFudHMuUkVRVUlSRURfRklFTERfQ0xBU1MpO1xuXHRcdH1cblx0fTtcblxufSgpKTtcbiJdfQ==
