
import './App.css';
import {ROUTES} from "./routes/routes.index";
import {useRoutes} from "react-router-dom";


function App() {
  return (
      useRoutes(ROUTES)
  );
}

export default App;
