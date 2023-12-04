import { useState } from "react";

import QUESTIONS from '../questions.js'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const  activeQuestionIndex= userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevAnswers => {
        return [...prevAnswers,selectedAnswer]
    })
  }

  return(
    <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map(x => {
                return(
                <li key={x} className="answer">
                    <button>{x}</button>
                </li>
                )
            })}
        </ul>
    </div>
     )
  }