import React from "react";
import * as question from "./question/question";
import * as catGifs from "./onSuccess/cat-gifs";

const NameyNumbers = () => {
  const [answer, setAnswer] = React.useState("")
  const [answerIsCorrect, setAnswerIsCorrect] = React.useState(null)
  const [nextCatGif, setNextCatGif] = React.useState(catGifs.nextCatGifUrl())
  
  const handleChange = event => {
    const inputValue = event.target.value;
    const providedAnswer = parseInt(inputValue, 10);
    setAnswer(inputValue)
    const isCorrect = question.checkAnswer(providedAnswer);
    setAnswerIsCorrect(isCorrect)
    if(isCorrect) {
      catGifs.nextCatGifUrl()
        .then(url => {
          setNextCatGif(url)
        })
    }
  };

  const showWhenCorrect = () =>
    answerIsCorrect == null || !answerIsCorrect ? "none" : "";

  const hideWhenCorrect = () =>
    answerIsCorrect == null || !answerIsCorrect ? "" : "none"

  const showWhenWrong = () =>
    answerIsCorrect == null || answerIsCorrect ? "none" : "";

  const resetPage = () => {
    question.triggerNext()
    setAnswer("")
    setAnswerIsCorrect(null)
    setNextCatGif("")
  }

  return <div id="rendered-by-react">

    <div id="question-row" className="row" style={{display: hideWhenCorrect()}}>
      Your number is {question.read().words}
    </div>
    <div id="answer-row" className="row" style={{display: hideWhenCorrect()}}>
      In numerals this says: <input
        type="number" max="9999" min="0" step="1"
        value={answer} onChange={handleChange}
      />
      <div className="mark-holder">
        <span className="tick" style={{display: showWhenCorrect()}}>✓</span>
        <span className="cross" style={{display: showWhenWrong()}}>✘</span>
      </div>
    </div>
    <div id="done" className="row" style={{display: showWhenCorrect()}}>
      <div className="result done-row">
        Yes! {question.read().words} says {question.read().numerals}
      </div>
      <div className="done-row">
        <button onClick={resetPage}>
          Awesome, Again?
        </button>
      </div>
      <div id="cat-gif" className="done-row">
        <img src={nextCatGif} alt="a cute random cat gif to celebrate your success"/>
      </div>
    </div>
  </div>
}

export default NameyNumbers;
