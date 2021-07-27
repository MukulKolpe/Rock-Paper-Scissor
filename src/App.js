import { Component } from "react";
import "./App.css";

const WhoIsBig=(First, Second)=>{
  if(First === Second){
    return "Draw";
  }
switch(First){
  case "Rock":
    if(Second ==="Scissor")  return First;
    else return Second;

    case "Paper":
    if(Second ==="Rock")  return First;
    else return Second;

    case "Scissor":
    if(Second ==="Paper")  return First;
    else return Second;

    default:
    
}
}

class App extends Component {
  state = {
    started: false,
    Player: null,
    Computer: null,
  };
  
  render() {
    const { started, Player, Computer } = this.state;
    const Images = {
      Rock: "https://i.imgur.com/TONXH9s.png",
      Paper: "https://i.imgur.com/t2154qR.png",
      Scissor: "https://i.imgur.com/SXstPKk.png",
    };
    return (
      <div className="App">
        <h1>Rock Paper Scissor</h1>
        {started ? (
          <div className="Game">
            <div className={"Player" + (Player ? "selected" : "")}>
              <p>Player</p>
              {Player ? (
               <img src={Images[Player]} alt={Player} />
              ) : (
                <div className="choose">
                  {Object.keys(Images).map((a) => (
                    <span key={a} onClick={()=>{
                      this.setState({
                        Player: a,
                        Computer: Object.keys(Images)[Math.floor(Math.random() * Object.keys(Images).length)]
                      })
                    }}>
                      <img src={Images[a]} alt={a} />
                      {a}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="Computer">
              <p>Computer</p>
              {Computer ?  
              <img src={Images[Computer]} alt={Computer} /> :
              <img src="https://i.imgur.com/CyvHqQH.png" alt="All Choices" />}
              
            </div>
          </div>
        ) : (
          <img
            className="start"
            src="https://i.imgur.com/FrnyhhB.png"
            alt="start"
            onClick={() => {
              this.setState({
                started: true,
              });
            }}
          />
        )}
        {Player && Computer && <p>{WhoIsBig(Player, Computer)} Wins!</p>}
        
      </div>
    );
  }
}

export default App;
