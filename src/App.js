import { Route } from "workbox-routing";
import Home from "./Views/Home/Home";
import Router from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
