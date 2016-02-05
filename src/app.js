export default class TypeWriter {

  constructor(arr) {
    this.array = arr;
  }

  strToArray(str) {
    let strArray = str.split('');
    return strArray;
  }

  displayArray(array, callback) {
    let elem = document.querySelectorAll('.cb-typewriter');
    let elemDiv = document.createElement('div');
    elem[0].appendChild(elemDiv);

    const action = () => {
      if (array.length === 0) {
        return (callback) ? callback() : '';
      }
      let elemSpan = document.createElement('span');
      elemSpan.setAttribute('class', 'cb-typewriter');
      elemSpan.innerHTML = array[0];
      elemDiv.appendChild(elemSpan);
      array.shift();

      setTimeout(() => {
        action();
      }, 500);
    }

    action();
  }

  loopArray() {
    const action = () => {
      if (this.array.length === 0) {
        return;
      }
      this.displayArray(this.strToArray(this.array[0]), () => {
        action();
      });
      this.array.shift();
    }
    action();
  }

  init() {
    this.loopArray();
  }

}
