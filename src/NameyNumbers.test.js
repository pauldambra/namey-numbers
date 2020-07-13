import React from "react";
import {act, render} from '@testing-library/react'
import NameyNumbers from "./NameyNumbers";
import {
  toHaveStyle, toHaveAttribute
} from '@testing-library/jest-dom/matchers'
import * as question from "./question/question";
import {fireEvent} from "@testing-library/dom";

expect.extend({toHaveStyle, toHaveAttribute})

describe("namey numbers", function () {
  it("starts with a question visible", function () {
    const expectedQuestion = question.read();

    const {container} = render(<NameyNumbers/>)

    const questionRow = container.querySelector("#question-row");

    expect(questionRow).not.toHaveStyle("display: none")
    expect(questionRow.textContent)
      .toEqual(`Your number is ${expectedQuestion.words}`)
  })

  it("starts with answer input visible", function () {
    const {container} = render(<NameyNumbers/>)

    const answerRow = container.querySelector("#answer-row");

    expect(answerRow).not.toHaveStyle("display: none")
  })

  it("starts with tick and cross hidden", function () {
    const {container} = render(<NameyNumbers/>)

    const tick = container.querySelector(".tick");
    const cross = container.querySelector(".cross");

    expect(tick).toHaveStyle("display: none")
    expect(cross).toHaveStyle("display: none")

  })

  it("shows cross if incorrect answer entered", function () {
    const {container} = render(<NameyNumbers/>)

    const input = container.querySelector("#answer-row input")
    const incorrectAnswer = question.read().numerals + 1;

    fireEvent.change(input, {target: {value: incorrectAnswer}})

    const tick = container.querySelector(".tick");
    const cross = container.querySelector(".cross");

    expect(tick).toHaveStyle("display: none")
    expect(cross).not.toHaveStyle("display: none")
  })

  it("shows tick if correct answer entered", function () {
    const {container} = render(<NameyNumbers/>)

    const tick = container.querySelector(".tick");
    const cross = container.querySelector(".cross");

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})

    expect(tick).not.toHaveStyle("display: none")
    expect(cross).toHaveStyle("display: none")
  })

  it("success view starts off hidden", function () {
    const {container} = render(<NameyNumbers/>)
    const done = container.querySelector("#done");
    expect(done).toHaveStyle("display: none");
  })

  it("shows success view on correct answer", function () {
    const {container} = render(<NameyNumbers/>)
    const done = container.querySelector("#done");

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})

    expect(done).not.toHaveStyle("display: none");
  })

  it("hides question and answer views on correct answer", function () {
    const {container} = render(<NameyNumbers/>)
    const questionRow = container.querySelector("#question-row");
    const answerRow = container.querySelector("#answer-row");

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})

    expect(questionRow).toHaveStyle("display: none");
    expect(answerRow).toHaveStyle("display: none");
  })

  it("the 'awesome, again' button resets the page", function () {
    const {container} = render(<NameyNumbers/>)
    const questionRow = container.querySelector("#question-row");
    const answerRow = container.querySelector("#answer-row");
    const done = container.querySelector("#done");
    const tick = container.querySelector(".tick");
    const cross = container.querySelector(".cross");
    const catGif = container.querySelector("#cat-gif img")

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})
    fireEvent.click(container.querySelector("#done button"))

    expect(questionRow).not.toHaveStyle("display: none");
    expect(answerRow).not.toHaveStyle("display: none");
    expect(done).toHaveStyle("display: none");
    expect(tick).toHaveStyle("display: none");
    expect(cross).toHaveStyle("display: none");
    expect(catGif).toHaveAttribute("src", "")
  })

  // hmmm, this test relies on a network call to the cat gifs service
  it("sets a cat gif when answer is correct", function () {
    const {container} = render(<NameyNumbers/>)
    const catGif = container.querySelector("#cat-gif img")

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})

    expect(catGif).not.toHaveAttribute("src", "")
  })

  it("shows the success message when the answer is correct", function () {
    const {container} = render(<NameyNumbers/>)
    const message = container.querySelector("#done .result")
    const expectedQuestion = question.read()

    const input = container.querySelector("#answer-row input")
    const correctAnswer = question.read().numerals;
    fireEvent.change(input, {target: {value: correctAnswer}})

    expect(message.textContent)
      .toEqual(`Yes! ${expectedQuestion.words} says ${expectedQuestion.numerals}`)
  })
})
