import React, { useState, useEffect } from "react";

const QUESTIONS_API_BASE_URL = "./static-data/questions.json"; //"https://api.frontendexpert.io/api/fe/questions";
const SUBMISSIONS_API_BASE_URL = "./static-data/submission.json";
//"https://api.frontendexpert.io/api/fe/submissions";

export default function useQuestionAndSubmissionList() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [questionsResponse, submissionResponse] = await Promise.all([
        window.fetch(QUESTIONS_API_BASE_URL),
        window.fetch(SUBMISSIONS_API_BASE_URL),
      ]);
      const [questions, submissions] = await Promise.all([
        questionsResponse.json(),
        submissionResponse.json(),
      ]);
      setQuestions(questions);
      setSubmissions(submissions);
    };
    fetchData();
  }, []);

  return [questions, submissions];
}
