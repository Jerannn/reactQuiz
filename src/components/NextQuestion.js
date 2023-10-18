function NextQuestion({ dispatch, answer, totalQuestions, currrentQuestion }) {
  if (answer === null) return null;
  if (currrentQuestion < totalQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className="border-1 my-10 self-end rounded-md  border-sky-400 bg-blue-200 p-2 text-xl hover:bg-blue-300"
      >
        Next
      </button>
    );
  if (currrentQuestion === totalQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className="my-10 inline-block self-center rounded-md border border-sky-400 bg-blue-200 p-2 text-xl text-stone-900 hover:bg-blue-300"
      >
        Finish
      </button>
    );
}

export default NextQuestion;
