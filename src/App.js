import "./App.css";
import Table from "./components/table";

const dataUrl = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "600px",
        margin: "auto",
        border: "1px solid",
        padding: "15px",
      }}
    >
      <h1>Test text</h1>
      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam
        [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
        voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui
        dolorem eum fugiat, quo voluptas nulla pariatur?
      </p>
      <div className="tableWrapper">
        <Table dataUrl={dataUrl} />
      </div>
      <h2>Test text</h2>
      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam
        [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
        voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui
        dolorem eum fugiat, quo voluptas nulla pariatur?
      </p>
      <div className="tableWrapper">
        <Table dataUrl={dataUrl} />
      </div>
    </div>
  );
}

export default App;
