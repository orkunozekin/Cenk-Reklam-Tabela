import React from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import Hakkimizda from '../Hakkimizda/Hakkimizda'
import Hizmetlerimiz from '../Hizmetlerimiz/Hizmetlerimiz';
import Iletisim from '../Iletisim/Iletisim';
import UserContext from '../ContextCreater';
import './App.css';
import Home from '../Home/Home';


export default class extends React.Component {



  render() {

    return (

      <UserContext.Provider
        value={{

        }}
      >
        <main className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/hakkimizda" exact component={Hakkimizda} />
          <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} />
          <Route path="/iletisim" exact component={Iletisim} />
        </main>
      </UserContext.Provider>
    );


  }

}


