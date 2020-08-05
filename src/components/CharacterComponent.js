import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCharacterCard ({profile}) {
    if (profile) {
        return (
            <Card>
                <CardImgOverlay>
                    <CardImg width="100%" src={profile.img} alt={profile.name} />
                    <CardTitle>{profile.name}</CardTitle>
                    <CardBody>Fun Fact:{profile.fact}</CardBody>
                </CardImgOverlay> 
            </Card>
        );
    }
}

function CharacterCard (props){
    return <RenderCharacterCard profile={props.profile}/>
}

export default CharacterCard;