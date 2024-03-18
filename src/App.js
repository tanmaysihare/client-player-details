import React from "react";
import Navbar from './navigation/Navbar';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./pages/HomePage";
import DetailForm from "./pages/DetailForm";
import PlayerDetail from "./pages/PlayerDetail";

function App() {
  return (
    <div className="w-full h-auto bg-zinc-800 text-white">
      <Navbar/>
      <Switch>
        <Route path='/' exact><HomePage/></Route>
        <Route path='/form'><DetailForm/></Route>
        <Route path='/playerDetail/:id'><PlayerDetail/></Route>
      </Switch>
    </div>
  );
}

export default App;
