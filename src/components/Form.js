import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Col, Button} from 'react-bootstrap';
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
            species: null,
            description: '',
            dateTime: null,
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

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.postSighting();
    // }

    // postSighting() {
    //     fetch('http://localhost:8081/sightings', {
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(this.state)
    //     });
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>What duck did you see?</ControlLabel>
                    <FormControl componentClass="select" placeholder="Select a duck" name="species" onChange={this.handleInputChange}>
                        <option value="select">Select...</option>
                        { this.props.species.map(s => {
                            return(
                                <option value={s.name}>{s.name}</option>
                            )
                        })}
                    </FormControl>
                    <ControlLabel>How many?</ControlLabel>
                    <FormControl type="number" onChange={this.handleInputChange} name="count">
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Describe your sighting..." name="description" onChange={this.handleInputChange}/>
                </FormGroup>
                <Datetime onChange={this.handleDateChange}/>
                <FormGroup>
                    <Col sm={10}>        
                        <input type="submit" value="Submit" /> 
                    </Col>
                </FormGroup>
            </form>
        );
      }
}

export default Form;