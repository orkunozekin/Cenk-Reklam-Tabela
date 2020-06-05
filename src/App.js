import React from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hakkimizda from './components/Hakkimizda'
import Hizmetlerimiz from './components/Hizmetlerimiz';
import Iletisim from './components/Iletisim';
import UserContext from './components/ContextCreater';




export default class extends React.Component {

 

  render() {

    return (

      <UserContext.Provider
        value={{
          
        }}
      >
        <main className="App">
          <Navbar />
          <Header />
          <Route path="/hakkimizda" exact component={Hakkimizda} />
          <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} />
          <Route path="/iletisim" exact component={Iletisim} />
        </main>
      </UserContext.Provider>
    );


  }

}


