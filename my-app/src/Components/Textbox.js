import React , {useState} from 'react'

export default function Textbox(props) {

    const [text, settxt] = useState('');

    window.onload=()=>{
     document.getElementById('txtbox').style.borderColor= "black";

    }
    const txtchange = function textchange(params) {
        settxt(params.target.value);
    }

    const clicked = ()=>{
        let val = text.toUpperCase();
        settxt(val);
    }
    const lower = ()=>{
        let val = text.toLowerCase();
        settxt(val);
    }
    const reset = ()=>{
        settxt("");
    }
    const wordy = ()=>{
        if (text.length === 0) {
            return 0;
        }
        else{
            return text.split(' ').length;
        }
    }


  return (
    <>
  <div className="container mb-2">
            <h1>{props.heading}</h1>
            <textarea className="form-control " value={text} onChange={txtchange} id="txtbox"  rows="8"></textarea>
            <br/>
            <button onClick={clicked} className="btn btn-primary mx-1">Uppercase</button>  
            <button onClick={lower} className="btn btn-primary mx-2">Lowercase</button> 
            <button onClick={reset} className="btn btn-primary mx-2">Reset</button> 
              
  </div>
  <div className="container">
    <h2> Your Summery : </h2>
    <p>No of Words are : {wordy()}</p>
    <p>No of Characters :{text.length} </p>
    <h3>Preview</h3>
    <pre>{text}</pre>
  </div>
  </>
  ) 
}
