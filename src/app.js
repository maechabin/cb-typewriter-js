export default class TypeWriter {

  constructor(arr) {
    this.default = {
      selector: '.cb-typewriter',
      interval: 500,
      callback: () => {
        return;
      }
    };
    this.array = arr;
    this.selector = this.default.selector;
    this.interval = this.default.interval;
    this.callback = this.default.callback;
  }

  strToArray(str) {
    let strArray = str.split('');
    return strArray;
  }

  displayArray(array, callback) {
    let elem = document.querySelectorAll(this.selector);
    let elemDiv = document.createElement('div');
    elem[0].appendChild(elemDiv);

    const action = () => {
      if (array.length === 0) {
        return (callback) ? callback() : '';
      }
      let elemSpan = document.createElement('span');
      elemSpan.setAttribute('class', 'cb-tw');
      elemSpan.innerHTML = array[0];
      elemDiv.appendChild(elemSpan);
      array.shift();

      setTimeout(() => {
        action();
      }, this.interval);
    };

    action();
  }

  loopArray(callback) {
    const action = () => {
      if (this.array.length === 0) {
        return callback();
      }
      this.displayArray(this.strToArray(this.array[0]), () => {
        action();
      });
      this.array.shift();
    };
    action();
  }

  init(options) {
    this.selector = options.selector || this.default.selector;
    this.interval = options.interval || this.default.interval;
    this.callback = options.callback || this.default.callback;
    this.loopArray(this.callback);
  }

}
