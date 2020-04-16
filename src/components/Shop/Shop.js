import React, { useState } from "react";
import './Shop.css';
import chapstick from '../../images/DB_Chapstick_duo_uncap.jpg';
import single from '../../images/DB_Chapstick_single.jpg';
import duo from '../../images/DB_Chapstick_duo.jpg';
import trio from '../../images/DB_Chapstick_trio.jpg';

const Shop = () => {
  return (
    <div className="main-shop-dv">
          <div className="shop-columns">
                <div className="s-col">
                    <div className="sidephotos">
                      <img className="side-img-dets" src={chapstick} alt="Logo" />
                      <img className="side-img-dets" src={single} alt="product image 1" />
                      <img className="side-img-dets" src={duo} alt="product image 2" />
                      <img className="side-img-dets" src={trio} alt="product image 3" />
                    </div>

                </div>
                <div className="s-col shop-img-col">
                    <div className="product-img">
                        <img className="prod-img-dets" src={chapstick} alt="Logo" />
                    </div>
                </div>
                <div className="s-col">
                    <h2> DEEWB STICK </h2>
                    <div className="product-details-col">
                        <h4> $5.99 USD </h4>
                        <div className='Quantity-Box'>
                            <div style ={{cursor: 'pointer'}}> -- </div>
                            <div> 0 </div>
                            <div style ={{cursor: 'pointer'}}> + </div>
                        </div>
                        <p> This chapstick is made of coconut oil, active ingredients, butter, flavoring
                            and other good stuff that I have no idea about </p>
                        <div className="add-to-cart-wrap">
                          <button className="add-to-cart"> add to cart </button>
                        </div>
                   </div>
                </div>
                <div className="s-col"> </div>
          </div>
    </div>
  );
};
export default Shop;
