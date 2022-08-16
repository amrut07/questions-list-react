import React from "react";
import Question from "./Question";

export default function Category({
  category,
  questions,
  submissionsByQuestionId,
}) {
  const correctSubmission = questions.reduce((sum, question) => {
    return submissionsByQuestionId[question?.id] === "CORRECT" ? sum + 1 : sum;
  }, 0);
  const totalQuestions = questions.length;

  return (
    <div className="category">
      <h2>
        {category} - {correctSubmission} / {totalQuestions}
      </h2>
      {questions.map(({ id, name }) => (
        <Question key={id} name={name} status={submissionsByQuestionId[id]} />
      ))}
    </div>
  );
}
