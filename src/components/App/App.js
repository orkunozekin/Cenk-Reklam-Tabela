import React from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
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
        <main className="app">
          <Header />
          <div className="routes">
            <Route path="/" exact component={Home} />
            <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} />
            <Route path="/iletisim" exact component={Iletisim} />
          </div>
        </main>
      </UserContext.Provider>
    );


  }

}


