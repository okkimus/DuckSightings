import React from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';
import moment from 'moment';

class Card extends React.Component {
    render() {
        return (
            <Col xs={12} sm={6} md={4} lg={3}>
                <Thumbnail src={"/images/" + this.props.species.replace(/ /g, "_") + ".jpg"} alt={"Picture of" + this.props.species}>
                    <h2>{this.props.species}</h2>
                    <h4>Quantity: {this.props.count}</h4>
                    <p>Seen: {moment(this.props.dateTime).format('DD.MM.YYYY, h:mm a')}</p>
                    <p>Description: {this.props.description}</p>
                </Thumbnail>
            </Col>
        );
    }
}

export default Card;

{/* <Col xs={12} sm={6} md={4} lg={3}>
                <img src={"/images/" + this.props.species.replace(/ /g, "_") + ".jpg"} width="76" height="76" />
                <h1>{this.props.species + this.props.count}</h1>
                <h5>{this.props.dateTime}</h5>
                <p>{this.props.description}</p>
            </Col> */}