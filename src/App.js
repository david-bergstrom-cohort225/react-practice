import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch handles showing only one route component show in the browser at any one time */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;