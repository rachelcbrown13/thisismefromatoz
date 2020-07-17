import React from 'react';
import Navbar from 'NavbarComponent';
import BirthdayForm from 'BirthdayFormComponent';

function Home() {
    return(
        <React.Fragment>
            <Navbar/>
            <BirthdayForm/>
            <img src="./img/FrontCover"/>
        </React.Fragment>
    );
}

export default Home;