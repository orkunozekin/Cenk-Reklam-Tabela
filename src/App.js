import React from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hakkimizda from './components/Hakkimizda'
import Hizmetlerimiz from './components/Hizmetlerimiz';
import Iletisim from './components/Iletisim'



export default class extends React.Component {



  render() {
    
    return (
      <main className="App">
        <Navbar />
        <Header />
        <Route path="/hakkimizda" exact component={Hakkimizda} />
        <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz}/>
        <Route path="/iletisim" exact component={Iletisim}/>
      </main>
    );
  }

}


