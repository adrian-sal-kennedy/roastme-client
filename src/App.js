import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import test from './components/test';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/test" exact component={test} />
      </div>
    </Router>
  );
}


export default App;
