/* eslint-disable */

import React from 'react';
import Dev from './dev'
import { connect } from 'react-redux'
import { loadDevs } from '../states/actions';
//import data from '../sample-dev.js';
/**
 * 
 * @param {*} val 
 */

/* const dev=(val) => {
    return(
    <div className="jumbotron" key={val.id}>
        <div className="container">
        <div className="col-md-2">
    <img className="thumbnail img-responsive" src={val.image}  alt="an alternative" />
</div>
            <h2>{val.name}</h2>
            <h3 >{val.status}</h3>
            <p >{val.desc}</p>
            <div>

</div>
            


        </div>
    </div>)}*/


/**
 * 
 * 
 */
class DevList extends React.Component {
    

    componentWillMount(){
       // this.props.loadSamples() ;
    }
    render() {
        //console.log("starting console");
       // console.log(this.data);
              
        return (
            
            <div>
                <h1>Our future genius</h1>
                {/*this.props.devs.map(x=>dev(x))*/}
                {this.props.devs.map(x=><Dev val={x} key={x.id} removeDev/>)}
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