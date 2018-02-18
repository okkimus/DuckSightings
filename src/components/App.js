import React from 'react';
import Card from './Card';
import Form from './Form';
import fe from './../actions/myFetch.js';
import {Grid, Row, PageHeader, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.fetchSightings = this.fetchSightings.bind(this);
        this.handleOrder = this.handleOrder.bind(this);

        this.state = {
            species: null,
            sightings: null,
            order: 'DESC'
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateState()) {
            console.log("handle show");
            return this.handleShow();
        }

        const sighting = {
            species: this.state.species,
            description: this.state.description,
            dateTime: this.state.dateTime,
            count: this.state.count
        }

        fetch('http://localhost:8081/sightings', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(sighting)
            })
            .then(() => {
                return this.fetchSightings()
            })
            .then(() => {
                this.setState({
                    description: '',
                    dateTime: moment(),
                    count: 1,
                    show: false
                });
            });
    }

    handleShow() {
        this.setState({ show: true });
    }

    validateState() {
        const s = this.state;
        return (
            this.props.species.includes(s.species) &&
            s.description &&
            s.count > 0 &&
            s.dateTime < new Date()
        );
    }

    fetchSightings() {
        fe('sightings').then(result => {
            this.setState({sightings: result});
        });
    }

    handleOrder(e) {
        this.setState({
            order: e
        });
    }

    render() {
        let form;
        let sightings;

        if (this.state.species) {
            const species = this.state.species;
            form = <Form 
                species={species}
                handleSubmit={this.handleSubmit}
                fetchSightings={this.fetchSightings}
                validateState={this.validateState}
                handleShow={this.handleShow} />;
         } else {
            fe('species').then(result => {
                let species = [];
                result.map((r) => {
                    species.push(r.name);
                });
                this.setState({species: species});
            });
        }

        if (this.state.sightings) {
            const sig = this.state.sightings.sort((a,b) => {
                if (this.state.order === 'DESC') {
                    return b.dateTime < a.dateTime;
                } else if (this.state.order === 'ASC') {
                    return b.dateTime > a.dateTime;
                }

            });
            sightings = sig.map(s => {
                return(
                    <Card 
                        species={s.species} 
                        description={s.description} 
                        dateTime={s.dateTime}
                        count={s.count}
                    />
                );
            });
        } else {
           this.fetchSightings(); 
        }

        return (
            <Grid>
                <Row>
                    <PageHeader>Duck Sightings <small>They're coming back!</small></PageHeader>
                    <ToggleButtonGroup
                        type="radio"
                        value={this.state.order}
                        onChange={this.handleOrder}
                        name={'order'}>
                        <ToggleButton value={'DESC'}>Descending</ToggleButton>
                        <ToggleButton value={'ASC'}>Ascending</ToggleButton>
                    </ToggleButtonGroup>
                </Row>
                <Row>
                    {sightings}
                </Row>
                <Row>
                    {form}
                </Row>
            </Grid>
        );
    }

}

export default App;