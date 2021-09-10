import "./App.css";
import Table from "./components/table";

const dataUrl = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
const secUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        border: "1px solid",
        padding: "15px",
      }}
    >
      <h1>Test text</h1>
      <p>
        inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam
      </p>
      <Table dataUrl={dataUrl} />
      <h2>Test text</h2>
      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam
      </p>
      <Table dataUrl={secUrl} />
    </div>
  );
}

export default App;
