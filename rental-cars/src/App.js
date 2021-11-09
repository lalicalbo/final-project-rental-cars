
import './App.scss';
import imagen from "./resources/imagen-banner3.jpeg"

function App() {
  return (
    <div className="App">
     <header>
      <div className="img">
      <img src={imagen} />
      </div>  
      </header>
    </div>
  );
}

export default App;
