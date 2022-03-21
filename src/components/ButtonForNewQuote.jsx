import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newQuote } from "../features/quoteHolder";
import axios from "axios";
import loadingImg from "../img/loading.png";
import dice from "../img/icon-dice.svg";

function ButtonForNewQuote() {
  const [showButton, setShowButton] = useState(true);
  const placeHolder = true;
  const dispatch = useDispatch();

  function callForNewQuote() {
    const url = "https://api.adviceslip.com/advice";
    axios.get(url).then((res) => {
      console.log(res.data.slip);
      dispatch(
        newQuote({ id: res.data.slip.id, advice: res.data.slip.advice })
      );
    });
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 2500);
  }
  useEffect(() => {
    callForNewQuote();
  }, [placeHolder]);

  const loading = (
    <img src={loadingImg} alt="" className="loading-icon button-thingy" />
  );

  return (
    <div className="button-box">
      {showButton ? (
        <button onClick={callForNewQuote} className="button-thingy">
          <img src={dice} alt="" />
        </button>
      ) : (
        loading
      )}
    </div>
  );
}

export default ButtonForNewQuote;
