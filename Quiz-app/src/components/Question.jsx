import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
    questionText,
    answers,
    selectedAnswer,
    answerState,
    onSelect,
    onSkip
}) {
  return (
    <>
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkip}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}

      />
    </>
  );
}
