import React, { useState } from "react";
import Home from "./Home";
import Radioo from "./Radio";

const Misol = ({ item }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "15+15",
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "25", isCorrect: false },
        { answerText: "31", isCorrect: false },
        { answerText: "29", isCorrect: false },
      ],
    },
    {
      questionText: "45+10-(5*2)",
      answerOptions: [
        { answerText: "30", isCorrect: false },
        { answerText: "55", isCorrect: false },
        { answerText: "45", isCorrect: true },
        { answerText: "35", isCorrect: false },
      ],
    },
    {
      questionText: "(12-5)*2-10",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "15", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "4", isCorrect: true },
      ],
    },
    {
      questionText: "10+(10*2)-10",
      answerOptions: [
        { answerText: "20", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "15", isCorrect: false },
        { answerText: "25", isCorrect: false },
      ],
    },
    {
      questionText: "(10 / 2) + (38+12)",
      answerOptions: [
        { answerText: "35", isCorrect: false },
        { answerText: "55", isCorrect: true },
        { answerText: "70", isCorrect: false },
        { answerText: "75", isCorrect: false },
      ],
    },
    {
      questionText: "(50 / 5) + (5 * 5)",
      answerOptions: [
        { answerText: "35", isCorrect: true },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "58", isCorrect: false },
      ],
    },
    {
      questionText: "(50 / 5) + (5 * 5) - 10",
      answerOptions: [
        { answerText: "35", isCorrect: false },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "25", isCorrect: true },
      ],
    },
    {
      questionText: "10 - (50 / 5) + (5 * 5)",
      answerOptions: [
        { answerText: "25", isCorrect: true },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "54", isCorrect: false },
      ],
    },
  ];
  //
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex justify-center items-center max-xl:p-12">
      <div className="w-[750px] bg-white p-10 rounded-lg" id="box">
        {!showScore ? (
          <Radioo
            id="misol"
            classList="yakun"
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            score={score}
            setScore={setScore}
            showScore={showScore}
            setShowScore={setShowScore}
            questions={questions}
            handleAnswerOptionClick={handleAnswerOptionClick}
            item={item}
          ></Radioo>
        ) : (
          <div>
            <div className="flex">
              <h2>Sizning natijangiz</h2>
              <span>2</span>
            </div>
            <div className="flex items-center justify-end gap-14">
              <button onClick={refresh} className="bg-red-600">
                Return
              </button>
              <Home></Home>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Misol;
