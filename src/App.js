import logo from './logo.svg';
import './App.css';
import Onion from './Onion/Onion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BreakFast from './Home/BreakFast';
import Nav from './Onion/Nav/Nav';
import Dinner from './Home/Dinner';
import NotFound from './Home/NotFound';
import Lunch from './Home/Lunch';


function App() {
  return (
    <div className="App">
     <Router>
       <Nav></Nav>
       <Switch>
<Route exact path="/">
<Onion></Onion>
</Route>
<Route path="/home">
<Onion></Onion>
</Route>
<Route path="/breakfast">
  <BreakFast></BreakFast>
</Route>
<Route path="/lunch">
  <Lunch></Lunch>
</Route>
<Route path="/dinner">
  <Dinner></Dinner>
</Route>
<Route path="*">
  <NotFound></NotFound>
</Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
