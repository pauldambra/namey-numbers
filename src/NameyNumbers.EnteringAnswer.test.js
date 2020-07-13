import React from 'react'
import { render } from '@testing-library/react'
import NameyNumbers from './NameyNumbers'
import {
  toHaveStyle, toHaveAttribute
} from '@testing-library/jest-dom/matchers'
import * as question from './question'
import { fireEvent } from '@testing-library/dom'

import { describe, expect, it } from '@jest/globals'

expect.extend({ toHaveStyle, toHaveAttribute })

describe('namey numbers entering answers', function () {
  it('shows cross if incorrect answer entered', function () {
    const { container } = render(<NameyNumbers />)

    const input = container.querySelector('#answer-row input')
    const incorrectAnswer = question.read().numerals + 1

    fireEvent.change(input, { target: { value: incorrectAnswer } })

    const tick = container.querySelector('.tick')
    const cross = container.querySelector('.cross')

    expect(tick).toHaveStyle('display: none')
    expect(cross).not.toHaveStyle('display: none')
  })

  it('shows tick if correct answer entered', function () {
    const { container } = render(<NameyNumbers />)

    const tick = container.querySelector('.tick')
    const cross = container.querySelector('.cross')

    const input = container.querySelector('#answer-row input')
    const correctAnswer = question.read().numerals
    fireEvent.change(input, { target: { value: correctAnswer } })

    expect(tick).not.toHaveStyle('display: none')
    expect(cross).toHaveStyle('display: none')
  })

  it('shows success view on correct answer', function () {
    const { container } = render(<NameyNumbers />)
    const done = container.querySelector('#done')

    const input = container.querySelector('#answer-row input')
    const correctAnswer = question.read().numerals
    fireEvent.change(input, { target: { value: correctAnswer } })

    expect(done).not.toHaveStyle('display: none')
  })

  it('hides question and answer views on correct answer', function () {
    const { container } = render(<NameyNumbers />)
    const questionRow = container.querySelector('#question-row')
    const answerRow = container.querySelector('#answer-row')

    const input = container.querySelector('#answer-row input')
    const correctAnswer = question.read().numerals
    fireEvent.change(input, { target: { value: correctAnswer } })

    expect(questionRow).toHaveStyle('display: none')
    expect(answerRow).toHaveStyle('display: none')
  })
})
