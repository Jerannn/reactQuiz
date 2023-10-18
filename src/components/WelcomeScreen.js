function WelcomeScreen({ dispatch }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mt-4 text-center text-2xl font-semibold text-blue-500">
        Welcome to react Quiz, this app will determine how massive knowledge you
        have when it comes to react!
      </h1>
      <button
        onClick={() => dispatch({ type: 'start' })}
        className="mt-5 rounded border-2 border-solid border-sky-500 bg-blue-200 p-2 text-xl hover:bg-blue-300"
      >
        Let's start
      </button>
    </div>
  );
}

export default WelcomeScreen;
