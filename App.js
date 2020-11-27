import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/login/index";
import {Register} from "./components/login/index";
import {Dashboard} from "./components/login/index";
import Navbar from './components/login/Navbar';
import TCP from './components/login/tcpcatalog';
import PartnerCatalog1 from './components/login/Partner_Catalog_1';
import ManageCategory from './components/login/ManageClassificationCategory';

import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/dashboard' component={Navbar}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/tcp' component={TCP}/>
        <Route exact path='/partner1' component={PartnerCatalog1}/>
        <Route exact path='/managecategory' component={ManageCategory}/>
        </Switch>
    </div>
  );
}

export default App;
