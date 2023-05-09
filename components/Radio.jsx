import React, { useState } from "react";

const Radioo = ({
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  showScore,
  setShowScore,
  questions,
  handleAnswerOptionClick,
  item,
}) => {
  const [value, setValue] = useState();
  //
  const onChange = (e) => {
    setValue(e.target.value);
  };
  console.log(questions[currentQuestion].answerOptions);

  return (
    <div>
      <h2 className="text-center text-2xl max-md:text-xl">
        {questions[currentQuestion].questionText}
      </h2>
      <div className="h-[1px] w-full bg-black mt-5"></div>
      <div className="mt-10 flex-col justify-center items-center pl-[50px] mb-5">
        <div onChange={onChange} value={value}>
          <div>
            {questions[currentQuestion].answerOptions.map((item, index) => (
              <form action="" className="flex items-center gap-5">
                <input type="radio" id="fname" className="scale-150 mb-5" />
                <label htmlFor={index} id={index} className="mb-5">
                  {item.answerText}
                </label>
              </form>
            ))}
          </div>
        </div>
        <div className="flex pl-12 mt-12">
          <button
            onClick={() => handleAnswerOptionClick(item)}
            className="bg-blue-600"
            type="primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Radioo;
