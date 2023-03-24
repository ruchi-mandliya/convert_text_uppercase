import React, { useState } from "react";

const TextForm = ({ heading }) => {
    const handleUpClick = () => {
        console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
  const[text, setText] = useState("Enter text here");
  return (
    <>
      <h1>{heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control" 
          value={text}
          id="exampleFormControlTextarea1"
          rows={8}

          onChange = {(e) => setText(e.target.value) }
        />
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick} >Covert to Uppercase</button>
    </>
  );
};

export default TextForm;
