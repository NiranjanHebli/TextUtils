import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handleUpClick was Envoked"+text);
    let newText = text.toUpperCase();
    setText(newText);
props.showAlert("Converted to Uppercase!","success");
  };
  const handleClearClick = () => {
    // console.log("handleUpClick was Envoked"+text);
    setText("");
  };
  const handleCopy=()=>{
    // console.log("I am hadleCopy! ");
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");

  };
  const handleLoClick = () => {
    // console.log("handleLoClick was Envoked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  };

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  }

  const handleOnChange = (event) => {
    // console.log("handleOnChange was Envoked");
    
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // setText("This will be the new text");
  return (
    <>
      <div>
        <div className="mb-3 " >
          <h1  style={{color: (props.mode==='dark')?'white':'black' }}>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{backgroundColor: (props.mode==='dark')?'grey':'white' }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>

          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button  className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert To Lowercase
          </button>

          <button className="btn btn-primary my-3 mx" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
            Remove ExtraSpaces
          </button>
          <button className="btn btn-primary my-3" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color: (props.mode==='dark')?'white':'black' }}>
        <h1 >Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length-text.split(" ").length+1} characters</p>
        <p> {0.08*(text.split(" ").length-1)} Read Time</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter your text to Preview"}</p>

      </div>
    </>
  );
}
