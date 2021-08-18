import './styles/App.css';
import React, {Component} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuperSquad from "./supersquad/SuperSquad";

class App extends Component {

    constructor() {
        super();
        this.state = {
            newDate: '',
            birthday: '1990-04-10'
        }
    }

    onChange(e) {
        const {value} = e.target;
        this.setState({newDate: value})
    }

    submitData() {
        console.log(this.state.newDate)
        this.setState({birthday: this.state.newDate})
    }

    render() {
        return (
            <div className='container mt-3'>
                <SuperSquad/>

                {/* <Form inline>

                    <Row>
                        <Col className="col-md-6 mx-auto">

                            <h2 className='mb-4'>Saisir votre date d'anniversaire</h2>

                            <FormControl type="date"
                                         onChange={this.onChange.bind(this)}
                            />
                            <Button className='mt-3' onClick={() => this.submitData()}>
                                Submit
                            </Button>
                        </Col>


                    </Row>


                </Form>*/}


            </div>
        );
    }


}

export default App;
