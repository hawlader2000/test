import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const greeting=(props)=>{
  return <h1>WELCOME YOUR NEW PROJECT</h1>;
}

const new_greeting=(props)=>{
return <h1>Please Sign IN</h1>;
}

const greeting=(props){
return is_loggeedin=props.isloggeedin

if(isloggeedin){
  return <greeting />
}
return <new_greeting />
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
<greeting is_loggeedin={false}/>
)