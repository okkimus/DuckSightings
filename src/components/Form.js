import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row, Button, Image, Well} from 'react-bootstrap';
import moment from 'moment';
import FormAlert from './FormAlert';

var Datetime = require('react-datetime');

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.props.handleSubmit.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
        this.validateState = this.props.validateState.bind(this);
        this.fetchSightings = this.props.fetchSightings;
        this.handleShow = this.props.handleShow;

        this.state = {
            species: 'select',
            description: '',
            dateTime: moment(),
            count: 1,
            show: false
        };
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleDateChange(e) {
        this.setState({
            dateTime: e._d
        });
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    valid(current) {
        const now = moment();
        return current < now;
    }
  
    render() {
        return (
            <Well>
                <Row>
                    <FormAlert handleDismiss={this.handleDismiss} show={this.state.show} />
                </Row>
                <Row>
                    <Col md={6}>
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <FormGroup>
                                    <Col md={9}>
                                        <ControlLabel>What duck did you see?</ControlLabel>
                                        <FormControl componentClass="select" placeholder="Select a duck" name="species" onChange={this.handleInputChange}>
                                            <option value="select">Select...</option>
                                            {   
                                                this.props.species.map(s => {
                                                    return(
                                                        <option value={s}>{s}</option>
                                                    )
                                                })
                                            }
                                        </FormControl>
                                    </Col>
                                    <Col md={3}>
                                        <ControlLabel>How many?</ControlLabel>
                                        <FormControl type="number" value={this.state.count} onChange={this.handleInputChange} name="count">
                                        </FormControl>
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Describe your sighting...</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="Here..." value={this.state.description} name="description" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <ControlLabel>When dis happend?</ControlLabel>
                                    <Datetime onChange={this.handleDateChange} value={this.state.dateTime} isValidDate={this.valid} />
                                    <HelpBlock>Sorry time travelers, you can't select future dates.</HelpBlock>
                                </Col>
                            </Row>
                            <FormGroup>        
                                <input type="submit" value="Submit" /> 
                                <HelpBlock>Note that every field is required!</HelpBlock>
                            </FormGroup>
                        </form>
                    </Col>
                    <Col md={6}>
                        <Image src={"/images/" + this.state.species.replace(/ /g, "_") + ".jpg"} responsive />
                    </Col>
                </Row>
            </Well>
        );
      }
}

export default Form;