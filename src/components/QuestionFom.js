import { useState } from "react";
import "../styles/QuestionForm.css";

export default function QuestionFom() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");

  const isInputError = inputValue.includes("Bonjour");

  function checkValue(value) {
    if (!isInputError) {
      setInputValue(value);
    }
  }

  return (
    <div>
      <h1 className="lmj-form-title">Contactez-moi</h1>
      <div className="lmj-form">
        <label id="message">Votre Message : </label>

        <textarea
          value={inputValue}
          name="message"
          id="message"
          onChange={(e) => setInputValue(e.target.value)}
          minLength={20}
          maxLength={200}
        />

        {isInputError && (
          <div>Merci de votre politesse 👍, Bonjour à vous 🖐️</div>
        )}

        <button className="lmj-form-btn" onClick={() => alert(inputValue)}>
          Alertez moi 🚨
        </button>
      </div>
    </div>
  );
}
