import React from 'react';
import NavBar from './NavBarComponent';

function About() {
    return(
        <React.Fragment>
            <NavBar/>
            <div className="d-flex flex-row align-items-center">
                <div className="col-5 ml-5"> 
                    <p>
                    <a href="https://www.rachelchardeabrown.com" target="_blank"><strong>Rachel Chardéa Brown</strong></a> is a teacher, speaker, and author. Through her experiences as a mother and preschool teacher, Rachel has developed a passion for children’s literature and seeing little ones grow. In between changing diapers and weathering meltdowns, she seeks to build children’s confidence, develop their imaginations and create environments for growth. Rachel resides in Fort Worth, Texas with her husband EJ and son Apollos.
                    </p>
                </div>
                <div className="col">
                    <img width="100%" src={require('../img/headshot.jpg')} alt="Author Rachel Brown" className="rounded-circle img-fluid"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;