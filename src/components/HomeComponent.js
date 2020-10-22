import React from 'react';
import NavBar from './NavBarComponent';
import BirthdayForm from './BirthdayFormComponent';


function Home() {
    return(
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <img id="home" width="100%" src={require('../img/FrontCover.png')} alt="Front book cover"/>
            </div>
            <BirthdayForm/>
        </React.Fragment>
    );
}

export default Home;