import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PROFILES } from '../shared/profiles';
import CharacterCard from './CharacterComponent'; 


function RenderCharacter ({profile}) {
    return(
            <Card>
                <Link to={`/profiles/${profile.id}`}>
                    <CardImg width="100%" src={profile.img} alt={profile.name} />
                    <CardImgOverlay>
                        <CardTitle>{profile.name}</CardTitle>
                        <CardBody>{profile.fact}</CardBody>
                    </CardImgOverlay> 
                </Link>
            </Card>
        );
    
}

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: PROFILES
        };
    }

    render() {
        const profilePageGrid = this.state.profiles.map(profile => {
            return (  
                <div key={profile.id} alt={profile.name} className="col-4">
                    <Link to= {`/profiles/${profile.id}`}>
                    <img src={profile.img} width="100%" className="img-thumbnail"/> 
                    <br/> 
                    <p>{profile.name}</p>
                    </Link>
                </div>                
            );
        })

        return (
            <React.Fragment>
                <NavBar/>
                <h1>Choose a character to learn more</h1>
                <div className="container">
                    <div className="row">
                        {profilePageGrid}
                    </div>
                </div>           
            </React.Fragment>
        );
    }
}

export default ProfilePage;