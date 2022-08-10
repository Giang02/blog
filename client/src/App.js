import React, { useContext } from "react";
import TopBar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {Context} from "./context/Context";
import TableInfo from "./pages/TableInfo/TableInfo";

export default function App() {
  const {user} = useContext(Context)
  return (
  <Router>
    <TopBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register" >
          {user ?<Home />:<Register/>}
        </Route>
        <Route path="/login">
          {user ?<Home />:<Login />}
        </Route>
        <Route path="/TableInfo">
          {user ?<TableInfo/>:<Login />}
        </Route>
        <Route path="/write">
          {user ? <Write />:<Login />}
        </Route>
        <Route path="/settings">
            {user ? <Settings />:<Login />}
        </Route>
        <Route path="/post/:id">
            <Single />
        </Route>
    </Switch>
  </Router>
  )
}
// export default App;
