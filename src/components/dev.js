/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux'
import { removeDev } from '../states/actions'

class Dev extends React.Component {
    constructor(props) {

        super(props)
        this.remove = this.remove.bind(this)
    }
    val = this.props.val
    remove(e) {
        e.preventDefault();
        const id = this.val.id
        console.log('Gonna a remove this dev')
        this.props.removeDev(id)
    }
    render() {
        return (
           
            <div className="panel panel-primary dev" >
                <div className="panel-heading">
                    {this.val.name}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive img-circle" src={this.val.image} alt="an alternative" />
                        </div>

                        <h3 >{this.val.status}</h3>
                        <div className="col-md-8">
                            <p >{this.val.desc}</p>
                        </div>
                    </div>


                    <div className="row col-md-12">
                        <div className="form-inline  visible-lg visible-md">

                            <div className="input-group col-md-2 pull-right">
                                <button className="form-control btn btn-danger " type="submit" onClick={this.remove}>Remove</button>

                            </div>
                            <div className="input-group col-md-2 col-md-offset-5">
                                <button className="form-control btn btn-success" type="submit" onClick={this.edit}>Edit</button>

                            </div>
                        </div>

                    </div>



                    <div>

                    </div>



                </div>
            </div>
         
            )
    }
}
const mapStateToProps = state => {
    return {
        devs: state.devs,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeDev: id => {
            dispatch(removeDev(id))
        }
    }
}


Dev = connect(mapStateToProps, mapDispatchToProps)(Dev)
export default Dev;