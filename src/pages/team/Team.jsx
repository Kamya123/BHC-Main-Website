import React from 'react';

import './team.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CommCard from '../../components/commCard/CommCard';
import TeamsCards from '../../components/teamsCards/TeamsCards';
import TeamMembersCards from '../../components/teamMembersCards/TeamMembersCards';

const Team = () => {
  return (
    <div>
      <Header h1="Team" p="Home" p1="Team"/>

      <TeamsCards />
      <TeamMembersCards />

      <Footer />
    </div>
  )
}

export default Team;