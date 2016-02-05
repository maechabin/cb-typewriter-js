(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var text = ['aaa', '10th', 'Anniversary'];

var strToArray = function strToArray(string) {
  var str = string;
  var strArray = str.split('');
  return strArray;
};

var displayArray = function displayArray(array, callback) {
  var main = document.querySelectorAll('.main');
  var elemDiv = document.createElement('div');
  main[0].appendChild(elemDiv);

  var act = function act() {
    if (array.length === 0) return callback ? callback() : "";
    var param = array[0];
    var elemSpan = document.createElement('span');
    elemSpan.setAttribute('class', 'cb-typewriter');
    elemSpan.innerHTML = param;
    elemDiv.appendChild(elemSpan);
    array.shift();

    setTimeout(function () {
      act();
    }, 160);
  };

  act();
};

displayArray(strToArray(text[0]), function () {
  displayArray(strToArray(text[1]), function () {
    displayArray(strToArray(text[2]));
  });
});

},{}]},{},[1]);
