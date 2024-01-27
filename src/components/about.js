import React from "react";

export default function About(props){
    return(
        <div className="my-5 py-5">
        <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" style={{backgroundColor:props.mode==='light'?'white':"#0f0541", color:props.mode==='light'?'black':'white',border:`1px solid ${props.mode==='light'?'black':'white'}`}}>
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'whitesmoke':"#06021b", color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>How and for what can TextUtils be used?</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" style={{backgroundColor:props.mode==='light'?'white':"#0f0541", color:props.mode==='light'?'black':'white',border:`1px solid ${props.mode==='light'?'black':'white'}`}}className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">TextUtils is a multi-purpose site, aimed at providing language assistance to the users. It comes with numerous modifications which can be implemented on the text specified with a simple click of a button. It also provides a real time analysis of the typed text.
      To use the App, simply type or paste the text to be analyzed in the provided space, and choose from the provided services via the buttons available.  </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'whitesmoke':"#06021b", color:props.mode==='light'?'black':'white',border:`1px solid ${props.mode==='light'?'black':'white'}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Meet the Creator</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" style={{backgroundColor:props.mode==='light'?'white':"#0f0541", color:props.mode==='light'?'black':'white',border:`1px solid ${props.mode==='light'?'black':'white'}`}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Hello world, Greeting from me, Harsh Pathak, a budding Web Developer. This site incorporates the use of basics of React and other WebDev technologies and is aimed at helping the users in some sort of way.</div>
    </div>
  </div>
</div>
</div>
</div>
    )
}