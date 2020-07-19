import React from 'react';
import NavBar from './NavBarComponent';
import BirthdayForm from './BirthdayFormComponent';

function Home() {
    return(
        <React.Fragment>
            <NavBar/>
            <img src={require('../img/FrontCover.png')}/>
            <BirthdayForm/>
        </React.Fragment>
    );
}

export default Home;