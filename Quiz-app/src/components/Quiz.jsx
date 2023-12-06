import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import quizIsCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;


  
  // function handleSelectAnswer (selectedAnswer)  {
  //   setUserAnswers((prevAnswers) => {
  //     return [...prevAnswers, selectedAnswer];
  //   });
    
  // }


  const handleSelectAnswer = useCallback(function handleSelectAnswer (selectedAnswer) {
      setUserAnswers((prevAnswers) => {
          return [...prevAnswers, selectedAnswer];
        });
    },[])

  
  const handleSkipQuestion = useCallback(() =>  handleSelectAnswer(null),[handleSelectAnswer])
    

  if(activeQuestionIndex == QUESTIONS.length){
    return(
      <div id="summary">
                <img src={quizIsCompleteImg} alt="quizIsCompleteImg" />
                <h2>Quiz Completed!</h2>
            </div>
          )
        }
        
        const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
        shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
      <QuestionTimer
      key={activeQuestionIndex}  //Adding key here to reset the component
      timeout={5000} 
      onTimeout={handleSkipQuestion}
      />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((x) => {
            return (
              <li key={x} className="answer">
                <button onClick={() => handleSelectAnswer(x)}>{x}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
