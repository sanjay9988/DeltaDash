import "./App.css";
import Card from "./components/Card";
import Result from "./components/Result";
import Suffel from "./components/Suffel";
import { useContext } from "react";
import ResultContext from "./context/result";

function getRandomColor() {
    // Generate random values for red, green, and blue channels
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Create the CSS color string in the format "rgb(r, g, b)"
    var color = "rgba(" + red + ", " + green + ", " + blue + ",0.1)";
  
    return color;
  }

const App = () => {
    const {result}:any = useContext(ResultContext);
    const color = getRandomColor();
    return (
        <div> 
             <h1> "Delta Dash" </h1>
        
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: color,
            borderRadius: "10px",
        }}>
           
            <div>
                <Card score={result.card} cardName="EVENT" />
                <Card  score={result.total} cardName="SCORE"/>
            </div>

            <div>
              
                <Result />
                <Suffel />
               
            </div>

        </div>
        </div>

    );
}


export default App;