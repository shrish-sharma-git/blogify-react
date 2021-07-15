import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import BlogDetails from './components/Blogs/BlogDetails';
import CreateBlog from './components/Blogs/CreateBlog';
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/blog/:id" component={BlogDetails}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/CreateBlog" component={CreateBlog}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
