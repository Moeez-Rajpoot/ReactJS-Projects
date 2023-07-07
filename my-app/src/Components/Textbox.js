import React , {useState} from 'react'

export default function Textbox(props) {

    const [text, settxt] = useState('Enter Your Text here :');

    const txtchange = function textchange(params) {
        console.log("hello");
        settxt(params.target.value);
    }

    const clicked = ()=>{

        let val = text.toUpperCase();
        settxt(val);
    }


  return (
  <div className="container mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={txtchange} id="txtbox"  rows="8"></textarea>
            <br/>
            <button onClick={clicked} className="btn btn-primary">Uppercase</button>     
  </div>
  
  ) 
}
