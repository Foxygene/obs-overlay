import { Link } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <>
      <h1>obs-overlay</h1>
      <Link className="fp-link" to="/tape">
        tape-effect
      </Link>
      <Link className="fp-link" to="/chat">
        chat
      </Link>
      <Link className="fp-link" to="/starting-soon">
        starting soon
      </Link>
      <Link className="fp-link" to="/subcounter">
        sub counter
      </Link>
      <Link className="fp-link" to="/brb">
        brb
      </Link>
    </>
  );
}

export default App;
