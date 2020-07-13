import React from 'react'
import { act, render } from '@testing-library/react'
import NameyNumbers from './NameyNumbers'
import {
  toHaveStyle, toHaveAttribute
} from '@testing-library/jest-dom/matchers'
import * as question from './question/question'
import { fireEvent } from '@testing-library/dom'
import { describe, expect, it } from '@jest/globals'
expect.extend({ toHaveStyle, toHaveAttribute })

describe('namey numbers success state', function () {
  it('shows the success message when the answer is correct', function () {
    const { container } = render(<NameyNumbers />)
    const doneRow = container.querySelector('#done')
    const message = container.querySelector('#done .result')
    const catGif = container.querySelector('#cat-gif img')

    const expectedQuestion = question.read()

    const input = container.querySelector('#answer-row input')
    const correctAnswer = question.read().numerals
    fireEvent.change(input, { target: { value: correctAnswer } })

    expect(doneRow).not.toHaveAttribute('display', 'none')
    expect(message.textContent)
      .toEqual(`Yes! ${expectedQuestion.words} says ${expectedQuestion.numerals}`)
    expect(catGif).not.toBeNull()
    expect(catGif).not.toHaveAttribute('src', '')
  })

  // hmmm, this test relies on a network call to the cat gifs service
  it('changes the cat gif when answer is correct', function () {
    const { container } = render(<NameyNumbers />)
    const catGif = container.querySelector('#cat-gif img')

    const input = container.querySelector('#answer-row input')
    const correctAnswer = question.read().numerals
    fireEvent.change(input, { target: { value: correctAnswer } })

    expect(catGif).not.toBeNull()
    expect(catGif).not.toHaveAttribute('src', '')
  })

  it("the 'awesome, again' button resets the page", function () {
    let container

    act(() => {
      ({ container } = render(<NameyNumbers />))

      const input = container.querySelector('#answer-row input')
      const correctAnswer = question.read().numerals
      fireEvent.change(input, { target: { value: correctAnswer } })
      fireEvent.click(container.querySelector('#done button'))
    })

    const questionRow = container.querySelector('#question-row')
    const answerRow = container.querySelector('#answer-row')
    const done = container.querySelector('#done')
    const tick = container.querySelector('.tick')
    const cross = container.querySelector('.cross')
    const catGif = container.querySelector('#cat-gif img')

    expect(questionRow).not.toHaveStyle('display: none')
    expect(answerRow).not.toHaveStyle('display: none')
    expect(done).toHaveStyle('display: none')
    expect(tick).toHaveStyle('display: none')
    expect(cross).toHaveStyle('display: none')
    expect(catGif).not.toBeNull()
    expect(catGif).toHaveAttribute('src', '')
  })
})
