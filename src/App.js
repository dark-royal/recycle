
import './App.css';
import {useRoutes} from "react-router-dom";
import {ROUTES} from "./routes/routes.index";

function App() {
  return (
      useRoutes(ROUTES)
  );
}

export default App;
