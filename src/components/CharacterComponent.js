import { React, Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { PROFILES } from './ProfilesComponent';
import { Link } from 'react-router-dom';

function CharacterCard({profile}) {
    return (
        <Card>
            <Link to={`/profiles/${profile.id}`}>
                <CardImg width="100%" src={profile.image} alt={profile.name} />
                <CardImgOverlay>
                    <CardTitle>{profile.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

export default CharacterCard;