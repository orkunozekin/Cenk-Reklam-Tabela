import React from 'react'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Hizmetlerimiz from '../Hizmetlerimiz/Hizmetlerimiz'
import Iletisim from '../Iletisim/Iletisim'
import UserContext from '../ContextCreater'
import './App.css'
import Home from '../Home/Home'


const App = () => {

  return (
    <main className="app">
      <Header />
      <Switch className="routes">
        <Route path="/" exact component={Hizmetlerimiz} />
        {/* <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} /> */}
        <Route path="/iletisim" exact component={Iletisim} />
      </Switch>
    </main>
  )
}

export default App


