import React from 'react';
import Card from './Card';
import Form from './Form';
import fe from './../actions/myFetch.js';
import {Grid, Row, PageHeader} from 'react-bootstrap';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.fetchSightings = this.fetchSightings.bind(this);

        this.state = {
            species: null,
            sightings: null,
            order: 'DESC'
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8081/sightings', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state)
            })
            .then(() => {
                return this.fetchSightings()
            })
            .then(() => {
                this.setState({
                    description: '',
                    dateTime: moment(),
                    count: 1
                })
            });
    }

    fetchSightings() {
        fe('sightings').then(result => {
            this.setState({sightings: result});
        });
    }

    render() {
        let form;
        let sightings;

        if (this.state.species) {
            const species = this.state.species;
            form = <Form species={species} handleSubmit={this.handleSubmit} fetchSightings={this.fetchSightings} />;
         } else {
            fe('species').then(result => {
                this.setState({species: result});
            });
        }

        if (this.state.sightings) {
            const sig = this.state.sightings.sort((a,b) => {
                return b.dateTime < a.dateTime;
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