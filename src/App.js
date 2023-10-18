import { useEffect, useReducer } from 'react';
import {
  Header,
  Main,
  Questions,
  Loader,
  Error,
  WelcomeScreen,
  NextQuestion,
  Progress,
  FinishQuiz,
} from './components/Links';

// http://localhost:7000/questions

const initialState = {
  questions: [],

  status: 'loading',
  currrentQuestion: 0,
  answer: null,
  points: 0,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'getData':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'error':
      return { ...state, status: 'error' };

    case 'start':
      return { ...state, status: 'start' };
    case 'answer':
      const question = state.questions[state.currrentQuestion];
      const isCorrect = action.payload === question.correctOption;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
        score: isCorrect ? state.score + 1 : state.score,
      };
    case 'nextQuestion':
      return {
        ...state,
        currrentQuestion: state.currrentQuestion + 1,
        answer: null,
      };
    case 'finish':
      return { ...state, status: 'finish' };

    case 'reset':
      return {
        ...state,
        status: 'ready',
        currrentQuestion: 0,
        answer: null,
        points: 0,
        score: 0,
      };
    default:
      throw new Error('Unknown');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, currrentQuestion, answer, points, score } = state;

  useEffect(() => {
    fetch('http://localhost:7000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'getData', payload: data }))
      .catch((err) => dispatch({ type: 'error' }));
  }, []);

  const totalScore = questions
    .map((question) => question.points)
    .reduce((acc, curr) => acc + curr, 0);
  const totalQuestions = questions.length;
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <WelcomeScreen dispatch={dispatch} />}
        {status === 'start' && (
          <>
            <Progress
              maximum={totalScore}
              points={points}
              totalQuestions={totalQuestions}
              currrentQuestion={currrentQuestion}
              answer={answer}
            />
            <Questions
              question={questions[currrentQuestion]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextQuestion
              dispatch={dispatch}
              answer={answer}
              totalQuestions={totalQuestions}
              currrentQuestion={currrentQuestion}
            />
          </>
        )}
        {status === 'finish' && (
          <FinishQuiz
            score={score}
            totalQuestions={totalQuestions}
            points={points}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
