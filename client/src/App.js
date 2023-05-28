import Header from './components/Header/Header';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <div>
      <Header/>
     <Switch >
        <Route path="/" exact component={Home}  />
        <Route path="/login" exact component={Login}  />
        <Route path="/register" exact component={Register}  />
     </Switch>
    </div>
  );
}

export default App;
