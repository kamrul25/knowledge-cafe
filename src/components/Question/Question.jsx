import React from "react";
import './Question.css'
const Question = () => {
  return (
      <div className="question-container">
        <h2 className="question">
          1.What is the difference between props and state?
        </h2>
        <div className="answer-card">
          <p className="answer">Answer:- State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
        </div>
        <h2 className="question">
          2.How does useState work?
        </h2>
        <div className="answer-card">
          <p className="answer">Answer:- useState is React Hook that allow me to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
        </div>
        <h2 className="question">
          3.Purpose of useEffect other than fetching data?
        </h2>
        <div className="answer-card">
          <p className="answer">Answer:- When we want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it.that useEffect allows us to easily separate logic over several functions, instead of placing all the logic in a single function.</p>
        </div>
        <h2 className="question">
          4.How does React work?
        </h2>
        <div className="answer-card">
          <p className="answer">Answer:- React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
      </div>
  );
};

export default Question;
