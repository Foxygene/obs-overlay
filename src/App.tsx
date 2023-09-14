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
    </>
  );
}

export default App;
