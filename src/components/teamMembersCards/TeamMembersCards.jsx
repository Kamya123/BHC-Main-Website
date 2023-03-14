import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Cards from '../../UI/Cards';
import { teamMembers } from '../../data';



const TeamMembersCards = () => {
    return (
        <section className="TeamMemberCards">
            <div className='TeamMemberCards_wrapper container'>
                {
                    teamMembers.map(({ id, image, name, desig }) => {
                        return (
                            <Cards className="teamMemberCards_cards" key={id} >
                                <span> {image} </span>
                                <div className="card_inner_content team_members_details">
                                    <h4 className='font-bold'> {name} </h4>
                                    <small> {desig} </small>
                                </div>
                                <div className='icons flex flex-row justify-center'>
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
                            </Cards>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TeamMembersCards
