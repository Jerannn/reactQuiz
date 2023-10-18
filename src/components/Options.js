function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <>
      <h1 className="mb-7 text-2xl font-medium">{question.question}</h1>
      {question.options.map((option, index) => (
        <button
          className={`${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            answer === index ? 'picked' : ''
          }  mt-2 h-10 w-full  rounded-full bg-cyan-700 px-3 py-8 text-xl text-slate-200 ${
            hasAnswered
              ? ''
              : 'transition duration-300 ease-in-out hover:translate-x-3 hover:bg-cyan-600'
          } `}
          key={option}
          onClick={() => dispatch({ type: 'answer', payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
