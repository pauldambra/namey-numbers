import React from 'react'
import * as question from './question/question'
import * as catGifs from './onSuccess/cat-gifs'

const NameyNumbers = () => {
  const [answer, setAnswer] = React.useState('')
  const [answerIsCorrect, setAnswerIsCorrect] = React.useState(null)
  const [q, setQuestion] = React.useState(question.read())

  React.useLayoutEffect(() => {
    catGifs.addCatImage(document.getElementById('cat-gif'))
  }, [q])

  const handleChange = event => {
    const inputValue = event.target.value
    setAnswer(inputValue)
    const providedAnswer = parseInt(inputValue, 10)
    const isCorrect = question.checkAnswer(providedAnswer)
    setAnswerIsCorrect(isCorrect)
  }

  const showWhenCorrect = () =>
    answerIsCorrect == null || !answerIsCorrect ? 'none' : ''

  const hideWhenCorrect = () =>
    answerIsCorrect == null || !answerIsCorrect ? '' : 'none'

  const showWhenWrong = () =>
    answerIsCorrect == null || answerIsCorrect ? 'none' : ''

  const resetPage = () => {
    const newQuestion = question.triggerNext()
    setQuestion(newQuestion)
    setAnswer('')
    setAnswerIsCorrect(null)
  }

  return (
    <div>
      <div
        id='question-row' className='row'
        style={{ display: hideWhenCorrect() }}
      >
        Your number is {question.read().words}
      </div>
      <div
        id='answer-row' className='row'
        style={{ display: hideWhenCorrect() }}
      >
        In numerals this says:
        <input
          type='number' max='9999' min='0' step='1'
          value={answer} onChange={handleChange}
        />
        <div className='mark-holder'>
          <span className='tick' style={{ display: showWhenCorrect() }}>✓</span>
          <span className='cross' style={{ display: showWhenWrong() }}>✘</span>
        </div>
      </div>
      <div id='done' className='row' style={{ display: showWhenCorrect() }}>
        <div className='result done-row'>
          Yes! {question.read().words} says {question.read().numerals}
        </div>
        <div className='done-row'>
          <button onClick={resetPage}>
            Awesome, Again?
          </button>
        </div>
        <div id='cat-gif' className='done-row'>
          Loading...
        </div>
      </div>
    </div>)
}

export default NameyNumbers
