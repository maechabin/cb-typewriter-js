(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeWriter = function () {
  function TypeWriter(arr) {
    _classCallCheck(this, TypeWriter);

    this.array = arr;
  }

  _createClass(TypeWriter, [{
    key: 'strToArray',
    value: function strToArray(str) {
      var strArray = str.split('');
      return strArray;
    }
  }, {
    key: 'displayArray',
    value: function displayArray(array, callback) {
      var elem = document.querySelectorAll('.cb-typewriter');
      var elemDiv = document.createElement('div');
      elem[0].appendChild(elemDiv);

      var action = function action() {
        if (array.length === 0) {
          return callback ? callback() : '';
        }
        var elemSpan = document.createElement('span');
        elemSpan.setAttribute('class', 'cb-typewriter');
        elemSpan.innerHTML = array[0];
        elemDiv.appendChild(elemSpan);
        array.shift();

        setTimeout(function () {
          action();
        }, 500);
      };

      action();
    }
  }, {
    key: 'loopArray',
    value: function loopArray() {
      var _this = this;

      var action = function action() {
        if (_this.array.length === 0) {
          return;
        }
        _this.displayArray(_this.strToArray(_this.array[0]), function () {
          action();
        });
        _this.array.shift();
      };
      action();
    }
  }, {
    key: 'init',
    value: function init() {
      this.loopArray();
    }
  }]);

  return TypeWriter;
}();

exports.default = TypeWriter;

},{}]},{},[1]);
