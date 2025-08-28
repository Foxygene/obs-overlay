import { createHashRouter } from "react-router-dom";

import Chat from "./pages/Chat";
import Tape from "./pages/Tape";
import StartingSoon from "./pages/StartingSoon";
import BRB from "./pages/BRB";
import App from "./App";
import Welcome from "./pages/Welcome";
import Ending from "./pages/Ending";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "tape",
    element: <Tape />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "starting-soon",
    element: <StartingSoon />,
  },
  {
    path: "brb",
    element: <BRB />,
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
  {
    path: "ending",
    element: <Ending />,
  },
]);
