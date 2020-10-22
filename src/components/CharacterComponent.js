import React from 'react';
import Navbar from './NavBarComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderCharacterCard ({profile}) {
    if (profile) {
        return (
            <div>
                <Card id="image">
                   <CardImgOverlay className="background">
                        <CardImg top card-image src={profile.img} alt={profile.name}/>
                        <CardBody className="background">
                            <CardTitle>{profile.name}</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Birthday: {profile.dob}</li>
                                    <li>Favorite Color: {profile.color}</li>
                                    <li>Fun Fact: {profile.fact}</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
}

function CharacterCard (props){
    return (
        <React.Fragment>
            <Navbar/>
            <RenderCharacterCard profile={props.profile}/>
        </React.Fragment>
    );

}

export default CharacterCard;