import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class nicu extends Component {

    render(){
        return <Redirect to='/nicu/ward' />
    }
}

export default nicu