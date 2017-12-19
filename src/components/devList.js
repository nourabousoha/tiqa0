/* eslint-disable */

import React from 'react';
import Dev from './dev'
import { connect } from 'react-redux'
import { loadDevs } from '../states/actions';
/**
 * 
 * 
 */
class DevList extends React.Component {
    

    
    render() {
        
        return (
            
            <div className="col-md-9 col-md-offset-2">
               
                {this.props.devs.map(x=><Dev val={x} key={x.id} />)}
        </div>
)
    }
}
const mapStateToProps = state => {
    return {
      devs: state.devs
    }
  }
DevList = connect(mapStateToProps)(DevList)
export default DevList;