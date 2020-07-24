import { React, Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function CharacterCard({profile}) {
    return (
        <Card>
            <Link to={`/profiles/${profile.id}`}>
                <CardImg width="100%" src={profile.img} alt={profile.name} />
                <CardImgOverlay>
                    <CardTitle>{profile.name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <p>here is some info</p>
                </CardBody>
            </Link>
        </Card>
    );
}

export default CharacterCard;