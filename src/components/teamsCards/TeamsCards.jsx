import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Cards from '../../UI/Cards';
import { teamsCards } from '../../data';



const TeamsCards = () => {
    return (
        <section className="TeamsCards">
            <div className='TeamsCards_wrapper flex flex-col'>
                {
                    teamsCards.map(({ id, image, name, desig, info }) => {
                        return (
                            <Cards className="teamsCards_cards flex" key={id} >
                                <div className="cards_left">
                                    <span> {image} </span>
                                    <div className="card_inner_content">
                                        <h4 className='font-bold'> {name} </h4>
                                        <small> {desig} </small>
                                    </div>
                                </div>
                                <div className="member_info cards_right text-justify flex flex-col justify-center">
                                    <small> {info} </small>
                                    <div className='icons flex flex-row'>
                                        <a href='#' className='icons_elt'>
                                            <FaFacebookF />
                                        </a>
                                        <a href='#' className='icons_elt'>
                                            <FaTwitter />
                                        </a>
                                        <a href='#' className='icons_elt'>
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>
                            </Cards>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TeamsCards