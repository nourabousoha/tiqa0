/* eslint-disable */

import React from 'react';

class Dev extends React.Component {
    constructor(props) {

        super(props)
        this.removeDev = this.removeDev.bind(this)
    }
    val = this.props.val
    removeDev(e) {
        e.preventDefault();
        console.log('Gonna a remove this dev')
        this.props.removeDev(this.val.id)
    }
    render() {
        return (
            <div className="panel panel-primary" >
                <div className="panel-heading">
                    <h4>{this.val.name}</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive" src={this.val.image} alt="an alternative" />
                        </div>

                        <h3 >{this.val.status}</h3>
                        <div className="col-md-8">
                        <p >{this.val.desc}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-md-offset-8">
                            <button type="submit" className="btn btn-danger " onClick={this.removeDev}>Remove</button>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success" >Edit  </button>
                        </div>
                    </div>
                    <div>

                    </div>



                </div>
            </div>)
    }
}
export default Dev;