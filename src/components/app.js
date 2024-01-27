import React from "react";
import Navbar from "./navbar";
import TextArea from "./textArea";
import Alert from "./alert";
import About from "./about";
//the commented part is for rerouting

// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
//   } from "react-router-dom";


export default function App(){
    const [mode,setMode]=React.useState('light');
    const [myStyle,setStyle]=React.useState({
        color:"black",
        backgroundColor:"white"
    });
    const [alert,setAlert]=React.useState(null);

    const popAlert=(type,msg)=>{
        setAlert({
            type:type,
            msg:msg
        })
        setTimeout( ()=>{
            setAlert(null)},2000
        )
    }

    // const router = createBrowserRouter([
    //     {
    //       path: "/",
    //       element: <TextArea heading="Enter the text to be analysed" mode={mode} myStyle={myStyle} popAlert={popAlert}/>
    //     },
    //     {
    //         path:"/about",
    //         element: <About  myStyle={myStyle} mode={mode}/>
    //     }
    //   ]);


    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor="#0f0541";
            setStyle({
                color:"white",
                backgroundColor:"#0f0541"
            })
            popAlert("success","Enabled Dark Mode.")
        }
        else
        {
            setMode('light');
            document.body.style.backgroundColor="white"
            setStyle({
                color:"black",
                backgroundColor:"white"   
            })
            popAlert("success","Enabled Light Mode.")
        }
    }
    return(
       <div style={myStyle}>
       <Navbar title="TextUtils" about="About TextUtils" mode={mode} togglemode={toggleMode}></Navbar>
                
             <Alert alert={alert} /> 
             <TextArea heading="Enter the text to be analysed" mode={mode} myStyle={myStyle} popAlert={popAlert}/>
             <About  myStyle={myStyle} mode={mode}/>   
             {/* <RouterProvider router={router} /> */}
       </div> 

    )
}