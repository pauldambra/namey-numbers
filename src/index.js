const dom = require('./dom')
const convert = require('./convert')
const catGifs = require('./cat-gifs')

const setupRow = (expectedNumeral, onCorrect) => {
  const row = document.getElementById("numerals");

  const theInput = row.querySelectorAll("input")[0];
  theInput.focus();
  theInput.addEventListener('input', function () {
    const answer = parseInt(this.value, 10);
    const answerCorrect = answer === expectedNumeral;
    row.querySelectorAll(".tick")[0].style.display = answerCorrect ? "" : "none";
    row.querySelectorAll(".cross")[0].style.display = answerCorrect ? "none" : "";

    if (answerCorrect) {
      setTimeout(onCorrect, 500)
    }
  });
};

const showDoneButton = (numerals, words) => function () {
  dom.hide("#numerals", document);
  dom.hide("#initial-number", document)
  const buttonHolder = document.getElementById("done");
  buttonHolder.querySelectorAll(".result")[0].innerHTML = words + " says " + numerals;
  buttonHolder.querySelectorAll("button")[0].innerHTML = "Awesome work! Again?";
  catGifs.addCatImage(document.getElementById("cat-gif"));
  dom.show('#done', document)
};

const showWordToHuman = words => {
  const initialRow = document.getElementById("initial-number");
  initialRow.style.display = "";
  initialRow.innerHTML = 'Your number is ' + words;
};

const setupPage = () => {
  const numerals = (Math.floor(Math.random() * 999) + 1);
  const words = convert.numeralsToWords(numerals);

  dom.show("#numerals", document);
  dom.hide(".mark-holder span", document);
  dom.hide("#done", document);
  dom.resetAllInputs(document);

  showWordToHuman(words);

  setupRow(numerals, showDoneButton(numerals, words));
};

document.getElementById("done").addEventListener("click", setupPage);
catGifs.preloadNextCatGif();
setupPage();
