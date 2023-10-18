function Progress({
  maximum,
  points,
  totalQuestions,
  currrentQuestion,
  answer,
}) {
  return (
    <div className="w-full">
      {/* //   <progress value={currrentQuestion} max={totalQuestions - 1}></progress>
    //   <span className="points">
    //     <span>{`${
    //       !!answer !== null && currrentQuestion + 1
    //     }/${totalQuestions}`}</span>

    //     <span>{`${points}/${maximum}`}</span>
    //   </span> */}
      <div className="mt-[6rem] h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-sky-900"
          style={{
            width: `${(currrentQuestion / (totalQuestions - 1)) * 100}%`,
          }}
        ></div>
      </div>
      <span className="points">
        <span>
          <span className="font-semibold">{`${
            !!answer !== null && currrentQuestion + 1
          }`}</span>
          /{totalQuestions}
        </span>

        <span>
          <span className="font-semibold">{points}</span>/{maximum}
        </span>
      </span>
    </div>
  );
}

export default Progress;
