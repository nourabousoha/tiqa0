import React from 'react';
import Header from './Header'
import { connect } from 'react-redux'

class Front extends React.Component {
    
    
    render() {
        return (
            <Header/>
        )
    }
}

Front = connect()(Front)
export default Front;