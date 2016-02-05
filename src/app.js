const text = ['aaa', '10th', 'Anniversary'];

const strToArray = (string) => {
  let str = string;
  let strArray = str.split('');
  return strArray;
}

const displayArray = (array, callback) => {
  let main = document.querySelectorAll('.main');
  let elemDiv = document.createElement('div');
  main[0].appendChild(elemDiv);

  const act = () => {
    if (array.length === 0) return (callback) ? callback() : "";
    let param = array[0];
    let elemSpan = document.createElement('span');
    elemSpan.setAttribute('class', 'cb-typewriter');
    elemSpan.innerHTML = param;
    elemDiv.appendChild(elemSpan);
    array.shift();

    setTimeout(() => {
      act();
    }, 160);
  }

  act();
};

displayArray(strToArray(text[0]), () => {
  displayArray(strToArray(text[1]), () => {
    displayArray(strToArray(text[2]))
  });
});
