import { useRef } from "react";

export default function Answers ({answers,selectedAnswer,answerState,onSelect}){
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
     

    return (
        <ul id="answers">
          {shuffledAnswers.current.map((x) => {
            const isSelected = selectedAnswer === x
            let buttonStyle = '';
            if(isSelected && answerState === 'answered'){
              buttonStyle = 'selected'
            }
             if (isSelected && (answerState ==='correct' || answerState ==='wrong')){
              buttonStyle = answerState
            }
            return (
              <li key={x} className="answer">
                <button className={buttonStyle} onClick={() => onSelect(x)} disabled={answerState!==''}>{x}</button>
              </li>
            );
          })}
        </ul>
    )
}