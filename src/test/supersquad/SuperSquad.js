import React, {Component} from "react";
import {connect} from "react-redux";
import {MyActions} from "../reducers/actions/actions";
import {Button, Col, Row} from "react-bootstrap";


class SuperSquad extends Component {
    constructor() {
        super()

    }

    componentDidMount() {
        // console.log(this.state)
        // console.log(this.props)
    }

    render() {
        const {dispatch} = this.props;

        return <div className="container">

            <Row>
                <Col className="col-md-4 mx-auto">
                    <Button onClick={() => {
                        if (this.props.app.length === 0) return
                        MyActions.createCharacter(dispatch, this.props.app.length - 1);
                        MyActions.assignCharacter(dispatch, this.props.app.length - 1);
                    }}>Add Heros</Button>
                </Col>
            </Row>

            <Row>
                <div className="col-md-6">
                    {this.props.app.map((d, k) => {
                        return <div key={k}>{d.name}</div>
                    })}
                </div>

                <div className="col-md-6">
                    {this.props.heroes.map((d, k) => {
                        return <div key={k}>
                            <Row>
                                <div className="col-12 mt-3">
                                    <Button onClick={() => {
                                        MyActions.deleteCharacter(dispatch, d.id)
                                    }
                                    } className='d-inline-block mx-3'>X</Button>
                                    {d.name}
                                </div>
                            </Row>

                        </div>
                    })}
                </div>

            </Row>

        </div>
    }
}

// const mapState = (state) => state
export default connect((state) => state, null)(SuperSquad);