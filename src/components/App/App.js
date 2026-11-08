import React from 'react'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Hizmetlerimiz from '../Hizmetlerimiz/Hizmetlerimiz'
import Iletisim from '../Iletisim/Iletisim'
import UserContext from '../ContextCreater'
import './App.css'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'


const App = () => {

  return (
    <div className="app">
      <Header />
      <main>
        <Switch className="routes">
          <Route path="/" exact component={Hizmetlerimiz} />
          {/* <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} /> */}
          <Route path="/iletisim" exact component={Iletisim} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App


