import React, { useState } from 'react'



export default function TextForm(props) {
  //making a state , which uses react hooks.

  const handleUpClick = () => {

    // console.log("uppercase was clicked" + text);

    let newText = text.toUpperCase();
    // console.log("handle Up Function is fired!");

    setText(newText);

    props.showAlert("converted to uppercase");
  }

  const handleLoClick = () => {

    let newText = text.toLowerCase();

    setText(newText);

    props.showAlert("converted to Lowercase");
  }

  const handleOnChange = (event) => {

    // console.log("on change fired");

    setText(event.target.value);
  }

  const handleCapitalize = () => {

    let lowercase = text.toLowerCase();

    let words = lowercase.split(" ");

    let newWords = words.map((word) => {

      return word.charAt(0).toUpperCase() + word.slice(1);
    })

    let newText = newWords.join(" ");

    setText(newText);

    props.showAlert("converted to capitalized");
  }

  const wordCount = (str) => {

    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;

  }

  const [text, setText] = useState('');


  //for changing the text data , we will be using a function which is in the second parameter of use state in this case that is (setText).

  //correct way to changge the state.

  // setText("hey! , this is modified by setText");

  // console.log("going in word change")
  return (
    <>
      <div className='container'>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>

        </div>

        <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert To UpperCase</button>

        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>


        <button className='btn btn-danger mx-1' onClick={handleCapitalize}>Capitalize first character</button>
      </div>




      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h1>Your Text Summary</h1>
        <p>{wordCount(text)} words and {text.length} characters</p>

        <p>Time to read words is - {0.008 * text.split(" ").length} minutes</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text for Preview.."}</p>
      </div>

    </>
  )
}
