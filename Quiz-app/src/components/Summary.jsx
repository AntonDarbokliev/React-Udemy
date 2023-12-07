import quizIsCompleteImg from "../assets/quiz-complete.png";


export default function Summary() {
    return (
        <div id="summary">
        <img src={quizIsCompleteImg} alt="quizIsCompleteImg" />
        <h2>Quiz Completed!</h2>
      </div>
    )
}