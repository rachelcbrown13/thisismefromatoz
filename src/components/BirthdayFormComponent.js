import React from 'react';
import { Control, Errors, LocalForm} from 'react-redux-form';
import { Label, Button, Form, FormGroup, Row, Col} from 'reactstrap';

function BirthdayForm() {
    return(
        <LocalForm className="form-inline">
            <Row>
                <Col>
                    <Control.text
                        model="name"
                        id="name"
                        name="name"
                        placeholder="What's your name?"
                        className="form-control"                                                
                    />
                </Col>
                <Col>
                    <Control.text
                        model="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"  
                    />
                </Col>
                <Label>Birthday:</Label>
                <Col>
                    <Control.text
                        model="birthday"
                        id="birthday"
                        name="birthday"
                        placeholder="mm/dd/yyyy"
                        className="form-control"  
                    />
                </Col>
                <Button>Sign Me Up!</Button>
            </Row>
        </LocalForm>
    );
}

export default BirthdayForm;