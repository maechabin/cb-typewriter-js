import TypeWriter from '../../dist/cb-typewriter.min.js';

var title = new TypeWriter(['Hello World !!', 'cb-typewriter-js']);
title.init({
  selector: '.title',
  interval: 100,
  callback: function () {
    var link = new TypeWriter(['https://github.com/maechabin/cb-typewriter-js']);
    link.init({
      selector: '.link',
      interval: 50,
      callback: function () {
        var url = document.querySelectorAll('.link');
        url[0].innerHTML = '<a href="https://github.com/maechabin/cb-typewriter-js">https://github.com/maechabin/cb-typewriter-js</a>';
      }
    });
  }
});
