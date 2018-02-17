import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row, Button, Image} from 'react-bootstrap';
import moment from 'moment';

var Datetime = require('react-datetime');

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.props.handleSubmit.bind(this);
        this.fetchSightings = this.props.fetchSightings;

        this.state = {
            species: 'select',
            description: '',
            dateTime: moment(),
            count: 1
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
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

    render() {
        return (
            <Row>
                <Col md={6}>
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <FormGroup>
                                <Col md={9}>
                                    <ControlLabel>What duck did you see?</ControlLabel>
                                    <FormControl componentClass="select" placeholder="Select a duck" name="species" onChange={this.handleInputChange}>
                                        <option value="select">Select...</option>
                                        { this.props.species.map(s => {
                                            return(
                                                <option value={s.name}>{s.name}</option>
                                            )
                                        })}
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
                                    <FormControl componentClass="textarea" name="description" onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <ControlLabel>When dis happend?</ControlLabel>
                                <Datetime onChange={this.handleDateChange} open={true} value={this.state.dateTime} />
                            </Col>
                        </Row>
                        <FormGroup>
                            <Col sm={10}>        
                                <input type="submit" value="Submit" /> 
                            </Col>
                        </FormGroup>
                    </form>
                </Col>
                <Col md={6}>
                    <Image src={"/images/" + this.state.species.replace(/ /g, "_") + ".jpg"} responsive />
                </Col>
            </Row>
        );
      }
}

export default Form;