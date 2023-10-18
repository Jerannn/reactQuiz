function FinishQuiz({ score, totalQuestions, points, dispatch }) {
  const percentage = (score / totalQuestions) * 100;
  return (
    <>
      <p className="mt-10 self-center rounded-full border bg-sky-900 px-4 py-2 text-center text-xl tracking-wider text-stone-100">
        You got scored {score} over {totalQuestions} ({Math.ceil(percentage)}%)
      </p>
      <span className="my-8 text-center text-xl font-semibold uppercase">
        Highscore: <strong>{points}</strong>
      </span>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="text-[19px] text-blue-500 underline hover:text-blue-600"
      >
        &larr; Quiz again
      </button>
    </>
  );
}

export default FinishQuiz;
