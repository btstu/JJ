import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js'
import PageA from './components/PageA'
import PageB from './components/PageB'
import PageC from './components/PageC'
import Sidebar from "./components/Sidebar/Sidebar"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (

    <BrowserRouter>
      <Sidebar />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/PageA" exact component={PageA} />
        <Route path="/PageB" exact component={PageB} />
        <Route path="/PageC" exact component={PageC} />
        <Route path="/PageD" exact component={PageC} />


        <Route path="/*" component={Home} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
