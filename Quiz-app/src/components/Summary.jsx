import quizIsCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({
  userAnswers
}) {
    const correctlyAnswered = userAnswers.filter((x,index) => x === QUESTIONS[index].answers[0]) 
    const skipped = userAnswers.filter((x) => x === null) 

    const skippedShare = Math.round((skipped.length / userAnswers.length) * 100)
    const correctShare = Math.round((correctlyAnswered.length / userAnswers.length) * 100)
    const wrongShare = 100 - (correctShare + skippedShare)

    return (
        <div id="summary">
        <img src={quizIsCompleteImg} alt="quizIsCompleteImg" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
        <p>
            <span className="number">{skippedShare}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{correctShare}%</span>
            <span className="text">answered correctly</span>
          </p>
          <p>
            <span className="number">{wrongShare}%</span>
            <span className="text">answered incorrectly</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((x,index) => {
            let cssClass = 'user-answer'

            if(x === null){
              cssClass += ' skipped'
            }else if(x === QUESTIONS[index].answers[0]){
              cssClass += ' correct'
            }else{
              cssClass += ' wrong'
            }

            return(
          <li key={index}>
          <h3>{index + 1}</h3>
          <p className="question">{QUESTIONS[index].text}</p>
          <p className={cssClass}>{x ?? 'Skipped'}</p>
        </li>  
            )
          })}
        </ol>
      </div>
    )
}