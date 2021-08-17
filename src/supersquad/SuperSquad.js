import React, {Component} from "react";
import {connect} from "react-redux";
import {MyActions} from "../reducers/actions/actions";


class SuperSquad extends Component {
    constructor() {
        super()

    }

    componentDidMount() {
        console.log(this.state)
        console.log(this.props)
    }

    render() {
        return "SUperSquad!!!!"
    }
}

// const mapState = (state) => state
export default connect( (state) => state, {MyActions})(SuperSquad);