/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import Mains from "./Mains.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progess from "./Progess.jsx";

const initialState = {
  questions: [],

  // loading,error,ready,active,finished
  status: "loading",

  index: 0,
  points: 0,

  answer: null,


};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      const question=state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
      case 'nextQuestion':
        return{
          ...state,
          index:state.index+1,
          answer:null
        }
    default:
      throw new Error("Unknown type");
  }
}

function App() {
  const [{ questions, status, index, answer,points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPossiblePoints=questions.reduce((prev,curr)=>prev+curr.points,0)
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Mains>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
          <Progess index={index} numsQuestions={numQuestions}points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
      </Mains>
    </div>
  );
}

export default App;
