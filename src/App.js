import './styles/App.css';
import React, {Component} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


    render() {
        return (
            <div className='container'>
                <Form inline>
                    <h2>Saisir votre date d'anniversaire</h2>
                    <Row>
                        <Col className="col-md-5 mx-auto">
                            <FormControl type="date"
                            />
                            <Button className='mt-3'>
                                Submit
                            </Button>
                        </Col>


                    </Row>


                </Form>


            </div>
        );
    }
}

export default App;
