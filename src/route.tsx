import { createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import Tape from "./pages/Tape";

export const router = createBrowserRouter([
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/tape",
    element: <Tape />,
  },
]);
