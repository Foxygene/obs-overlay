import { createHashRouter } from "react-router-dom";

import Chat from "./pages/Chat";
import Tape from "./pages/Tape";
import StartingSoon from "./pages/StartingSoon";
import BRB from "./pages/BRB";
import App from "./App";

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
]);
