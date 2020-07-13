import React from 'react'
import { render } from '@testing-library/react'
import NameyNumbers from './NameyNumbers'
import {
  toHaveStyle, toHaveAttribute
} from '@testing-library/jest-dom/matchers'
import * as question from './question'

import { describe, expect, it } from '@jest/globals'
expect.extend({ toHaveStyle, toHaveAttribute })

describe('namey numbers starting state', function () {
  it('starts with a question visible', function () {
    const expectedQuestion = question.read()

    const { container } = render(<NameyNumbers />)

    const questionRow = container.querySelector('#question-row')

    expect(questionRow).not.toHaveStyle('display: none')
    expect(questionRow.textContent)
      .toEqual(`Your number is ${expectedQuestion.words}`)
  })

  it('starts with answer input visible', function () {
    const { container } = render(<NameyNumbers />)

    const answerRow = container.querySelector('#answer-row')

    expect(answerRow).not.toHaveStyle('display: none')
  })

  it('starts with tick and cross hidden', function () {
    const { container } = render(<NameyNumbers />)

    const tick = container.querySelector('.tick')
    const cross = container.querySelector('.cross')

    expect(tick).toHaveStyle('display: none')
    expect(cross).toHaveStyle('display: none')
  })

  it('success view starts off hidden', function () {
    const { container } = render(<NameyNumbers />)
    const done = container.querySelector('#done')
    expect(done).toHaveStyle('display: none')
  })
})
