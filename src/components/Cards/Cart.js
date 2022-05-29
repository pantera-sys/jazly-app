import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Cart = ({source, desc, }) => {
    useEffect(() => {
        Aos.init({duration : 1500})
    }, [])

    const contain = {
      'object-fit': 'contain',
    }
  return (
    <div className="col " >
      <div className="card shadow-sm" data-aos="fade-up"> 
          <img style={contain} src={source} className="bd-placeholder-img card-img-top " width="100%" height="225"   aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
          <div className="card-body">
          <p className="card-text">{desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small classNameName="text-muted"></small>
          </div>
        </div>
      </div>
    </div>
  )
}
