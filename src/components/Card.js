import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Card;