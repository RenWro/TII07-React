import React from "react";
import Router from "./Routers/Router";
/*

function App() {
    return (
        <div className="App">
            <Router />
        </div>
    );
}

/*
import Headers from "./Inc/Headers";
import Mains from "./Inc/Mains";
import Footers from "./Inc/Footers";
// Criando um objeto APP para o site
class App extends React.Component{
  render(){
    return(
      <>
        <Headers />
        <hr />
        <Mains />
        <hr />
        <Footers />
      </>
    );
  }
}**
class App extends React.Component{
  render(){
    return(
      <Router />
    );
  }
}

// Retorno do Objeto
export default App;

*/

export default function App(){
  return(
    <Router />
  );
}
