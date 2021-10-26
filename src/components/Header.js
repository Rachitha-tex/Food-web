import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className="banner ">
            <Navbar/>
           <div className="banner_content">
              <div className="container">
                  <div className="banner-text">
                  <h3>Pizza Delivery</h3>
               <h1>MAESTRO PIZINNI</h1>
               <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eum iusto modi dolore sit, omnis possimus sunt quaerat alias tempore?
               </p>
               <div className="banner-btn">
                <a href="" className="btn btn-smart">Delivery Now</a>
               </div>
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Header
