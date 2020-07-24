import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { PROFILES } from '../shared/profiles';
//import CharacterCard from './CharacterComponent'; //Link to character card later

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: [
            {
                id: 0,
                name: 'Apollos',
                dob: 'January 6, 2012',
                color: 'blue',
                fact: "The name Apollos means 'One who destroys'",
                img: require('../img/Letter_A.png')
            },
            {
                id: 1,
                name: 'Bethel',
                dob: 'November 15, 2010',
                color: 'blue',
                fact: 'The name Apollos means "One who destroys"',
                img: require('../img/Letter_B.png')
            }
            ]
        };
    }

    render() {
        const profilePage = this.state.profiles.map(profile => {
            return (
                <div className="col-4" key={profile.id} alt={profile.name}>
                    <img src={profile.img} width="100%" className="img-thumbnail"/> <br/> {profile.name}
                </div>
            );
        })
        return (
            <React.Fragment>
                <NavBar/>
                <h1>Choose a character to learn more</h1>
                <div className="row">
                    {profilePage}
                </div>               
            </React.Fragment>
            // <Card>
            //     <Link to={`/profiles/${this.state.profiles.id}`}>
            //         <RenderProfiles/>
            //         {/* <CardImg width="100%" src={profile.img} alt={profile.name} /> */}
            //         {/* <CardImgOverlay>
            //             <CardTitle>{profile.name}</CardTitle>
            //         </CardImgOverlay>  */}
            //     </Link>
            // </Card>
        );
    }
}

export default ProfilePage;