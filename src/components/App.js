import React from 'react';
import Card from './Card';
import fe from './../actions/myFetch.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            species: null,
            sightings: null
        };
    }


    render() {
        let cards;
        let sightings;

        console.log(this.state.sightings);
        if (this.state.species) {
            const species = this.state.species;
            cards = species.map(s => {
                return <Card name={s.name} />;
            });
        } else {
            fe('species').then(result => {
                this.setState({species: result});
            });
        }

        // if (this.state.sightings) {
        //     const sig = this.state.sightings;
        //     sightings = sig.map(s => {
        //         return <Card name={s.describtion} />;
        //     });
        // } else {
        //     console.log(typeof fe('sightings'));
        // }

        return (
            <div>
                {cards}
                {sightings}
            </div>
        );
    }

}

export default App;