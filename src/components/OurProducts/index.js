import React from 'react'
import { Link } from 'react-router-dom'

const margin = {
  "margin-right" : "4px",
}

export const OurProducts = () => {
  return (
    <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Nuestros productos</h1>
              <p className="lead text-muted">Luce un accesorio unico, sencillo y a tu eleccion. Bisuteria hecha con cariño y amor, 100% hechos a mano. </p>
              <p>
                <Link to="/" className="btn btn-primary my-2 " style={margin}>Haz tu pedido</Link>
                <Link to="/" className="btn btn-secondary my-2">Secondary action</Link>
              </p>
            </div>
          </div>
        </section>
  )
}
