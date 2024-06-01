import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/Card.css";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Estoy practicando la libreria de react</h1>
          <div className="container container-fluid">
            <Card titulo={"la tengo re larga hno"} sub={"literalmente no estoy mintiendo"}
            texto={"bueno capaz que si xddddddddddd"}></Card>
            <Card titulo={"la tengo re larga hno"} sub={"literalmente no estoy mintiendo"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
