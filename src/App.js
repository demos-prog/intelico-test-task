import "./App.css";
import Table from "./components/table";

const dataUrl = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

function App() {
  return (
    <div className="App">
      <div className="tableWrapper">
        <Table dataUrl={dataUrl} />
      </div>
    </div>
  );
}

export default App;
