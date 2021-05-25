import 'assets/css/app.css'
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories/:idc" component={Details} />
      </Router>
    </div>
  )
}

export default App;
