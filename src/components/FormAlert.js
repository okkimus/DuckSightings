import React from 'react';
import {Alert} from 'react-bootstrap';

class FormAlert extends React.Component {
    
    render() {
        if (this.props.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.props.handleDismiss}>
                    <h4>Please fill all fields!</h4>
                    <p>
                        After you have filled all the information, please try submitting again.
                    </p>
                </Alert>
            );
        } else {
            return null;
        }
    }
}

export default FormAlert;