import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewSite from './NewSite';
import CompanySite from './CompanySite';

function App() {
 
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/new">
                <NewSite/>
            </Route>
            <Route path="/skillsites/:id">
                <CompanySite/>
            </Route>
         </Switch>
        </div>
      </div>
    </Router>
 
  );
}

export default App;
