import React from 'react';

import Cards from '../../UI/Cards';
import { serviceCards } from '../../data';



const ServiceCards = () => {
    return (
        <section className="ServiceCards">
            <div className='ServiceCards_wrapper container'>
                {
                    serviceCards.map(({ id, image, title, info }) => {
                        return (
                            <Cards className="serviceCards_cards" key={id} >
                                <span> {image} </span>
                                <div className="card_inner_content">
                                    <h4 className='font-bold'> {title} </h4>
                                    <small> {info} </small>
                                </div>
                            </Cards>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ServiceCards
