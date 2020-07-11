const setupRow = (expectedNumeral, onCorrect) => {
  const row = document.getElementById("numerals");

  const theInput = row.querySelectorAll("input")[0];
  theInput.focus();
  theInput.addEventListener('input', function (e) {
    const answer = parseInt(this.value, 10);
    const answerCorrect = answer === expectedNumeral;
    row.querySelectorAll(".tick")[0].style.display = answerCorrect ? "" : "none";
    row.querySelectorAll(".cross")[0].style.display = answerCorrect ? "none" : "";

    if (answerCorrect) {
      setTimeout(onCorrect, 500)
    }
  });
};

const hide = selector => {
  const nodes = document.querySelectorAll(selector);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "none";
  }
};

const show = selector => {
  const nodes = document.querySelectorAll(selector);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "";
  }
};

const resetAllInputs = () => {
  const nodes = document.querySelectorAll("input");
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].value = "";
  }
};

let nextImage;
const preloadNextCatUrl = () => {

  let catGifUrl = "https://thecatapi.com/api/images/get?format=src&type=gif";
  catGifUrl += "&cacheBuster=" + new Date().getTime();

  const i = new Image();
  i.style.width = '100%';
  i.onload = function () {
    console.log(catGifUrl, 'preloaded!')
    nextImage = i;

  }
  i.src = catGifUrl;
};

const addCatImage = () => {
  const theGif = document.getElementById("cat-gif");
  theGif.innerHTML = '';
  theGif.appendChild(nextImage);
};

const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0, n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f(g(x));
const not = x => !x;
const chunk = n => xs =>
  isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

const numToWords = n => {

  let a = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  let b = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  let g = [
    '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
  ];

  // this part is really nasty still
  // it might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones, tens, huns]) => {
    return [
      num(huns) === 0 ? '' : a[huns] + ' hundred ',
      num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
      a[tens + ones] || a[ones]
    ].join('');
  };

  let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;

  if (typeof n === 'number')
    return numToWords(String(n));
  else if (n === '0')
    return 'zero';
  else
    return comp(chunk(3))(reverse)(arr(n))
      .map(makeGroup)
      .map(thousand)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(' ');
};

const showDoneButton = (numerals, words) => function () {
  hide("#numerals");
  hide("#initial-number")
  const buttonHolder = document.getElementById("done");
  buttonHolder.querySelectorAll(".result")[0].innerHTML = words + " says " + numerals;
  buttonHolder.querySelectorAll("button")[0].innerHTML = "Awesome work! Again?";
  addCatImage();
  show('#done')
};

const showWordToHuman = words => {
  const initialRow = document.getElementById("initial-number");
  initialRow.style.display = "";
  initialRow.innerHTML = 'Your starting number is ' + words;
};

const setupPage = () => {
  preloadNextCatUrl();

  const numerals = (Math.floor(Math.random() * 999) + 1);
  const words = numToWords(numerals);

  show("#numerals");
  hide(".mark-holder span");
  hide("#done");
  resetAllInputs();

  showWordToHuman(words);

  setupRow(numerals, showDoneButton(numerals, words));
};

document.getElementById("done").addEventListener("click", setupPage);

setupPage();
