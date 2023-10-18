import { Options } from './Links';
function Questions({ question, dispatch, answer }) {
  return (
    <div className="mt-10">
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
