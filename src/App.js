import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Data from './Data';

export default function App() {
  const cardsArray = Data.map(travel => {
    return <Cards 
      key = {travel.id}
      item = {travel}
    />
  })
  return (
    <div>
      <Header/>
      <section>
        {cardsArray}
      </section>
    </div>
    
  );
}

