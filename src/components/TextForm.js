import React, { useState } from 'react'

const TextForm = (props) => {
  
    const handleupclick = ()=>{
       
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    
    const handleupclick2 = ()=>{
       
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleremoveclick3 = ()=>{
       
        let newText = ('')
        setText(newText)
        props.showAlert("Remove is successfull!","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("mybox")
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert("Copied to clipboard!","success");
       document.getSelection().removeAllRanges()
        
    }
    const handleOnChange = (event)=>{
       
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
      

    <>
    <div className='container mx-3'>
        <h1 className='mb-3'>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control"  value= {text} onChange={handleOnChange}  style = {{backgroundColor: props.mode==="dark"?"grey":"white" , color: props.mode === "dark"?"white":"black"}}id="mybox" rows="15"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick = {handleupclick} >Convert to UpperCase </button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick = {handleupclick2} >Convert to Lowercase </button>
<button disabled={text.length===0} className="btn btn-danger" onClick = {handleremoveclick3} >Remove </button>
<button disabled={text.length===0} className="btn btn-secondary mx-3 my-1" onClick = {handleCopy} >Copy Text </button>

</div>
<div className="conatiner my-4">
<h2>Text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} words {text.length} character</p>
</div>
   </>
  )
}

export default TextForm
