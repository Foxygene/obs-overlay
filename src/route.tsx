import { createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import Tape from "./pages/Tape";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "",
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
]);
