import React, {useState} from 'react'

export default function TextForm(props) {
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked.")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked.")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
        // console.log("On Change.")
        setText(event.target.value)
    }
    const handleRepeatedClick = () =>{
        // console.log("Uppercase was clicked.")
        const strArr = text.split(" ");
        const res = [];
        for(let i = 0; i < strArr.length; i++){
            if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
                if(!res.includes(strArr[i])){
                    res.push(strArr[i]);
                };
            };
        };
        let newText = res.join(" ")
        setText(newText)
    }
    
    const [text, setText] = useState('')
    // text = "Wrong way" // Wrong way to set text
    // setText("Correct Way!") // Correct way
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
    color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRepeatedClick}>Count repeating words</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p> <b>{text.split(" ").length} </b>words, {text.length} chars</p>
        <p>{0.008 * text.split(" ").length} minutes to read. </p>
        <h2>Preview</h2>
        <p>{text.length > 0? text: "Enter some text to preview here."}</p>
    </div>
    </>
  )
}
 