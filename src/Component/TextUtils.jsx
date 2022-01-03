import React, { useState } from "react";
import "../App.css";

function TextUtils({ showAlert, theme }) {
  const [text, setText] = useState("");

  // change to uppercase
  const changeToUpper = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    showAlert("Converted to UpperCase", "success");
  };

  // change to lowercase
  const changeToLower = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    showAlert("Converted to LowerCase", "success");
  };

  // capitalized case
  const capitalCase = () => {
    let firstChar = text.slice(0, 1);
    let otherChar = text.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChar = otherChar.toLowerCase();
    let capitalize = firstChar + otherChar;
    setText(capitalize);
    showAlert("Converted to Capitalize case", "success");
  };

  // copytext
  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("clipboard", "success");
  };

  //remove extra space
  const whileSpace = () => {
    let remove = text.split(/[ ]+/);
    setText(remove.join(" "));
    showAlert("Extra-Space are removed", "success");
  };

  // clear text
  const clearText = () => {
    let clear = "";
    setText(clear);
    showAlert("Your text is clear", "success");
  };

  return (
    <div className={`body__container`}>
      <h4 className="heading">Enter the text to analyze below</h4>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`textarea ${theme ? "light" : "dark"}`}
        name="message"
        id="text"
        cols="50"
        rows="5"
      ></textarea>
      <br />
      <button
        disabled={text.length === 0}
        onClick={changeToUpper}
        className="btn"
      >
        UPPER CASE
      </button>
      <button
        disabled={text.length === 0}
        onClick={changeToLower}
        className="btn"
      >
        lower case
      </button>
      <button
        disabled={text.length === 0}
        onClick={capitalCase}
        className="btn"
      >
        Capitalized Case
      </button>
      <button disabled={text.length === 0} onClick={copyText} className="btn">
        Copy Text
      </button>
      <button disabled={text.length === 0} onClick={whileSpace} className="btn">
        Remove space
      </button>
      <button disabled={text.length === 0} onClick={clearText} className="btn">
        Clear
      </button>
      <div>
        <h1>Your text summary</h1>
        <p>
          <strong>
            {" "}
            {text.split(/\s+/).filter((elem) => elem.length !== 0).length}{" "}
          </strong>
          words and
          <strong> {text.length}</strong> characters
        </p>
        <p>
          <strong>
            {" "}
            {0.008 *
              text.split(/\s+/).filter((elem) => elem.length !== 0).length}{" "}
          </strong>
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}

export default TextUtils;
