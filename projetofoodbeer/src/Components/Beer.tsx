import React, { useEffect, useState } from 'react';
import beerApi from '../Service/beerApi'
import { BeerTypes } from '../Types/BeerTypes';
 
const Beer = () => {
 
    const [beer, setbeer] = useState<BeerTypes[]>()
    const [show, setshow] = useState<Boolean>(false)

    useEffect(() => {
        beerApi.get(``)
            .then(response => setbeer(response.data))

    })
    

    return (
        <div className="food-beer-list food-shop">
    
          <h1>Cervejas</h1>
          <button onClick={() => setshow(!show)}>Buscar Cerveja</button>
          <div className="beers-list">
          {
            show &&
            beer?.map((i: BeerTypes) => (
              <div className="beer" key={i.name}>
                <img src={i.image_url} alt="Buzz" />
                <h3>{i.name}</h3>
                <span>{i.tagline}</span>
                <small>{i.description}</small>
              </div>
            ))
          }
          </div>
        </div>
      );
    }

export default Beer;