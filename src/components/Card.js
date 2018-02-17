import React from 'react';
import {Col} from 'react-bootstrap';

class Card extends React.Component {
    render() {
        return (
            <Col xs={12} md={4}>
                <img src={"/images/" + this.props.species.replace(/ /g, "_") + ".jpg"} width="76" height="76" />
                <h1>{this.props.species + this.props.count}</h1>
                <h5>{this.props.dateTime}</h5>
                <p>{this.props.description}</p>
            </Col>
        );
    }
}

export default Card;