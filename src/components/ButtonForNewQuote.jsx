import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newQuote } from "../features/quoteHolder";
import axios from "axios";

function ButtonForNewQuote() {
  const dispatch = useDispatch();

  function callForNewQuote() {
    const url = "https://api.adviceslip.com/advice";
    axios.get(url).then((res) => {
      console.log(res.data.slip);
      dispatch(
        newQuote({ id: res.data.slip.id, advice: res.data.slip.advice })
      );
    });
  }
  useEffect(() => {
    callForNewQuote();
  }, []);

  return (
    <div>
      <button onClick={callForNewQuote}>Get a new quote</button>
    </div>
  );
}

export default ButtonForNewQuote;
