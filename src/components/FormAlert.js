import React from 'react';
import {Alert} from 'react-bootstrap';

class FormAlert extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.props.handleShow.bind(this);
  
      this.state = {
        show: false
      };
    }

    handleDismiss() {
        this.setState({ show: false });
    }
  
    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
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