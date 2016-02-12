(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../../dist/cb-typewriter.min.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../../dist/cb-typewriter.min.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.cbTypewriterMin);
    global.app = mod.exports;
  }
})(this, function (_cbTypewriterMin) {
  'use strict';

  var _cbTypewriterMin2 = _interopRequireDefault(_cbTypewriterMin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var title = new _cbTypewriterMin2.default(['Hello World !!', 'cb-typewriter-js']);
  title.init({
    selector: '.title',
    interval: 100,
    callback: function callback() {
      var link = new _cbTypewriterMin2.default(['https://github.com/maechabin/cb-typewriter-js']);
      link.init({
        selector: '.link',
        interval: 50,
        callback: function callback() {
          var url = document.querySelectorAll('.link');
          url[0].innerHTML = '<a href="https://github.com/maechabin/cb-typewriter-js">https://github.com/maechabin/cb-typewriter-js</a>';
        }
      });
    }
  });
});

},{"../../dist/cb-typewriter.min.js":2}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.cbTypewriterMin = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  !function (global, factory) {
    if ("function" == typeof define && define.amd) define(["exports"], factory);else if ("undefined" != typeof exports) factory(exports);else {
      var mod = {
        exports: {}
      };
      factory(mod.exports), global.app = mod.exports;
    }
  }(undefined, function (exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
      };
    }(),
        TypeWriter = function () {
      function TypeWriter(arr) {
        _classCallCheck(this, TypeWriter), this["default"] = {
          selector: ".cb-typewriter",
          interval: 500,
          callback: function callback() {}
        }, this.array = arr, this.selector = this["default"].selector, this.interval = this["default"].interval, this.callback = this["default"].callback;
      }

      return _createClass(TypeWriter, [{
        key: "strToArray",
        value: function value(str) {
          var strArray = str.split("");
          return strArray;
        }
      }, {
        key: "displayArray",
        value: function value(array, callback) {
          var _this = this,
              elem = document.querySelectorAll(this.selector),
              elemDiv = document.createElement("div");

          elem[0].appendChild(elemDiv);

          var action = function action() {
            if (0 === array.length) return callback ? callback() : "";
            var elemSpan = document.createElement("span");
            elemSpan.setAttribute("class", "cb-tw"), elemSpan.innerHTML = array[0], elemDiv.appendChild(elemSpan), array.shift(), setTimeout(function () {
              action();
            }, _this.interval);
          };

          action();
        }
      }, {
        key: "loopArray",
        value: function value(callback) {
          var _this2 = this,
              action = function action() {
            return 0 === _this2.array.length ? callback() : (_this2.displayArray(_this2.strToArray(_this2.array[0]), function () {
              action();
            }), void _this2.array.shift());
          };

          action();
        }
      }, {
        key: "init",
        value: function value(options) {
          this.selector = options.selector || this["default"].selector, this.interval = options.interval || this["default"].interval, this.callback = options.callback || this["default"].callback, this.loopArray(this.callback);
        }
      }]), TypeWriter;
    }();

    exports["default"] = TypeWriter, "undefined" != typeof window && !window.boilerplate && (window.TypeWriter = TypeWriter);
  });
});

},{}]},{},[1]);
