import React from 'react';
import NavBar from './NavBarComponent';

function Profiles() {
    return(
        <React.Fragment>
            <NavBar/>
            <h1>Here's each character</h1>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <a><img src={require('../img/Letter_A.png')} alt="Apollos" class="img-thumbnail"/></a>
                        <a><h4 class="text-center">Apollos</h4></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profiles;