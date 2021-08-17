import './styles/App.css';
import React, {Component} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            newDate: ''
        }
    }

    onChange(e) {
        const {value} = e.target;
        this.setState({newDate: value})
    }

    submitData(){
        console.log(this.state.newDate)
    }

    render() {
        return (
            <div className='container'>
                <Form inline>

                    <Row>
                        <Col className="col-md-6 mx-auto">

                            <h2 className='mb-4'>Saisir votre date d'anniversaire</h2>

                            <FormControl type="date"
                                         onChange={this.onChange.bind(this)}
                            />
                            <Button className='mt-3' onClick={()=> this.submitData()}>
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
