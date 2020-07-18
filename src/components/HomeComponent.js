import React from 'react';
import NavBar from './NavBarComponent';
import BirthdayForm from './BirthdayFormComponent';

function Home() {
    return(
        <React.Fragment>
            <NavBar/>
            <BirthdayForm/>
            <img src={require('../img/FrontCover.png')}/>
        </React.Fragment>
    );
}

export default Home;