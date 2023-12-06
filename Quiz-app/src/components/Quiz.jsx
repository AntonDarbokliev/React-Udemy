import { useCallback, useRef, useState } from "react";

import QUESTIONS from "../questions.js";
import quizIsCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState,setAnswerState ] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = answerState === '' ?  userAnswers.length : userAnswers.length - 1;
  


  const handleSelectAnswer = useCallback(function handleSelectAnswer (selectedAnswer) {
      setAnswerState('answered')

      setUserAnswers((prevAnswers) => {
          return [...prevAnswers, selectedAnswer];
        });

        setTimeout( () => {
          
          if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
            setAnswerState('correct')
          } else {
            setAnswerState('wrong')
          }

          setTimeout(() => {
            setAnswerState('')
          },2000)
        },1000)

    },[activeQuestionIndex])

  
  const handleSkipQuestion = useCallback(() =>  handleSelectAnswer(null),[handleSelectAnswer])
    

  if(activeQuestionIndex == QUESTIONS.length){
    return(
      <div id="summary">
                <img src={quizIsCompleteImg} alt="quizIsCompleteImg" />
                <h2>Quiz Completed!</h2>
            </div>
          )
        }
       
  return (
    <div id="quiz">
      <div id="question">
        <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelect={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkip={handleSkipQuestion}
        answerState={answerState}
        />      
      </div>
    </div>
  );
}
