import React from "react";

export default function TextArea(props) {
    const [text,settext]=React.useState("");
    const [characters,setCharacters]=React.useState(0);
    const [words,setWords]=React.useState(0);
   

   
    

    function handleClickUpper(){
        let newText=text.toUpperCase();
        settext(newText);
        if(text.length===0)
        props.popAlert("warning","Text Field Empty")
        else
        props.popAlert("success","Text converted to UpperCase.")
    }
    function handleClickLower(){
        let newText=text.toLowerCase();
        settext(newText);
        if(text.length===0)
        props.popAlert("warning","Text Field Empty")
        else
        props.popAlert("success","Text converted to LowerCase.")
    }
    function handleClickCClear(){
        let newText='';
        setCharacters(0);
        setWords(0);
        settext(newText);
        if(text.length===0)
        props.popAlert("warning","Text Field Empty")
        else
        props.popAlert("success","Cleared Text.")
    }
    function handleCopy(){
        navigator.clipboard.writeText(text)
        if(text.length===0)
        props.popAlert("warning","Text Field Empty")
        else
        props.popAlert("success","Text Copied.")
    }
    function handleExtraSpace(){
        let newText=text.split(/[ ]+/);
        settext(newText.join(' '));
        if(text.length===0)
        props.popAlert("warning","Text Field Empty")
        else
        props.popAlert("success","Removed Extra Spaces.")
    }

    function handleChange(events){
        settext(events.target.value);
        setCharacters(events.target.value.length);
        setWords(events.target.value.split(/\s+/).filter((el)=>{return el.length!==0}).length);
    }



    return (
        <div className="container" style={props.myStyle} >
        <div className="mb-3 my-3">
            <h2>{props.heading}</h2>
            <textarea onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter the Text" value={text}
            style={{backgroundColor:props.mode==='dark'?"#958d8d":"white"}}></textarea>
        </div>
        <button type="button" onClick={handleClickUpper} class="btn btn-primary mx-2 my-1 ">Convert to UpperCase</button>
        <button type="button" onClick={handleClickLower} class="btn btn-primary mx-2 my-1">Convert to LowerCase</button>
        <button type="button" onClick={handleClickCClear} class="btn btn-primary mx-2 my-1">Clear Text</button>
        <button type="button" onClick={handleCopy} class="btn btn-primary mx-2 my-1">Copy Text</button>
        <button type="button" onClick={handleExtraSpace} class="btn btn-primary mx-2 my-1 ">Remove Extra Spaces</button>
        <div>
        <h4 className="my-2">Your Text Summary</h4>
        <p className="my-1">{words} words and {characters} character</p> 
        <p className="my-1">Average Read Time : {words*0.008} min </p>
        <h5 className="my-2">Preview</h5>
        <p>{text.length!==0?text:"Enter the text in the TextArea for Preview"}</p>  
        </div>
        </div>
    )
}