import "./App.css";
import React from "react";
import Category from "./Category";
import useQuestionAndSubmissionList from "./UseQuestionList";
// import useLocalStorage from "./UseLocalStorage";

function App() {
  // const [value, setValue] = useLocalStorage("name", "");

  // custom hook to fetch the data on on mount
  const [questions, submissions] = useQuestionAndSubmissionList();
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestionId = getSubmissionsByQuestionId(submissions);
  const categories = Object.keys(questionsByCategory);

  return (
    <div className="App categories">
      {/* <header className="App-header">
        <h1>Hello World</h1>

        <input
          type="text"
          value={value}
          style={{
            fontSize: "24px",
          }}
          onChange={(e) => setValue(e.target.value)}
        />

        <h2>{value}</h2>
      </header> */}
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          questions={questionsByCategory[category]}
          submissionsByQuestionId={submissionsByQuestionId}
        />
      ))}
    </div>
  );
}

function getQuestionsByCategory(questions) {
  const questionsByCategory = {};
  questions.forEach(({ category, ...question }) => {
    if (!questionsByCategory.hasOwnProperty(category)) {
      questionsByCategory[category] = [];
    }
    questionsByCategory[category].push(question);
  });
  return questionsByCategory;
}

function getSubmissionsByQuestionId(submissions) {
  const submissionsByQuestionId = {};
  submissions.forEach(({ questionId, status }) => {
    submissionsByQuestionId[questionId] = status;
  });
  return submissionsByQuestionId;
}

export default App;
