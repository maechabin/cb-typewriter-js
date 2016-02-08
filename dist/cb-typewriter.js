'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeWriter = function () {
  function TypeWriter(arr) {
    _classCallCheck(this, TypeWriter);

    this.default = {
      selector: '.cb-typewriter',
      interval: 500,
      callback: function callback() {
        return;
      }
    };
    this.array = arr;
    this.selector = this.default.selector;
    this.interval = this.default.interval;
    this.callback = this.default.callback;
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
      var _this = this;

      var elem = document.querySelectorAll(this.selector);
      var elemDiv = document.createElement('div');
      elem[0].appendChild(elemDiv);

      var action = function action() {
        if (array.length === 0) {
          return callback ? callback() : '';
        }
        var elemSpan = document.createElement('span');
        elemSpan.setAttribute('class', 'cb-tw');
        elemSpan.innerHTML = array[0];
        elemDiv.appendChild(elemSpan);
        array.shift();

        setTimeout(function () {
          action();
        }, _this.interval);
      };

      action();
    }
  }, {
    key: 'loopArray',
    value: function loopArray(callback) {
      var _this2 = this;

      var action = function action() {
        if (_this2.array.length === 0) {
          return callback();
        }
        _this2.displayArray(_this2.strToArray(_this2.array[0]), function () {
          action();
        });
        _this2.array.shift();
      };
      action();
    }
  }, {
    key: 'init',
    value: function init(options) {
      this.selector = options.selector || this.default.selector;
      this.interval = options.interval || this.default.interval;
      this.callback = options.callback || this.default.callback;
      this.loopArray(this.callback);
    }
  }]);

  return TypeWriter;
}();

exports.default = TypeWriter;
