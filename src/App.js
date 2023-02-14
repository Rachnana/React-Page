import './App.css';
import Image from "./assets/hirshhorn.jpg";
import Demo from './components/Demo';
function App() {
  var x=10;
  var text;
  if( x === 11) {
    text = "Equal";
  }
  else {
    text = "Not Equal";
  }
  return (
    <div className="App">
      <h1>Hello World !!!</h1>
      <h2>{50+5}</h2>"
      <img src={Image} alt="" width="35%"/>
      <h2>{text}</h2>

      <h3>{x >= 100 ? "greater than or equal to 10" : "not equal to 10"}</h3>
      <Demo text={text} />
    </div>
  );
};

export default App;
