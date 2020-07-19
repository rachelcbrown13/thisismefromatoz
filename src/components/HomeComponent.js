import React from 'react';
import NavBar from './NavBarComponent';
import BirthdayForm from './BirthdayFormComponent';

function Home() {
    return(
        <React.Fragment>
            <NavBar/>
            <img width="100%" src={require('../img/FrontCover.png')}/>
            <BirthdayForm/>
        </React.Fragment>
    );
}

export default Home;