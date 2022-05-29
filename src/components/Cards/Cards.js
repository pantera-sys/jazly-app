import React from 'react'
import { OurProducts } from '../OurProducts'
import { Cart } from './Cart';
import { infoCards } from './infoCards';



export const Cards = () => {
  return (
    <main>
        <OurProducts />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                { 
                 infoCards.map(({source, description}) => <Cart source={source} desc={description} />)
                }
            </div>
          </div>
        </div>
      
      </main>
  )
}
