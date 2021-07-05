import Sidebarmain from './components/Sidebarmain';
import Lessionplan from './components/lessionplan';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Development from './components/development';

function App() {
  return (
    <Router>
      <div>
          <Sidebarmain />
          <div>
            <Navbar />
          </div> 
          <Switch>
            <Route path="/students" component={Development} />
            <Route path="/lessionplans" component={Lessionplan} />
            <Route path="/settings" component={Development} />
          </Switch>  
      </div>
    </Router>
  );
}

export default App;
