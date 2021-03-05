import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personajes from "./views/Personajes";
import Lugares from "./views/Lugares";
import Episodios from "./views/Episodios";
import Home from "./views/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Personajes" component={Personajes} />
        <Route exact path="/Lugares" component={Lugares} />
        <Route exact path="/Episodios" component={Episodios} />
      </Switch>
    </Router>
  );
}

export default App;
