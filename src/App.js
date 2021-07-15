import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
