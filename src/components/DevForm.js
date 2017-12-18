import React from 'react';
const uuidv4 = require('uuid/v4');
import { connect } from 'react-redux'

class DevForm extends React.Component {
    constructor(props) {

        super(props)
        this.createDev = this.createDev.bind(this)
    }
    createDev(e) {
        const { _name, _desc,_photo,_password,_status,_devform } = this.refs
        e.preventDefault();
        console.log('Gonna a create somme dev')
       const dev ={
           id:uuidv4(),
           name:_name.value,
           desc:_desc.value,
           image:_photo.value,
           status:_status.value,
           price:_password.value

       }
      
       this.props.dispatch.addDev(dev)
       _devform.reset()
    }
    render() {
        return (
            <div>
                <h1>Hello from react my data is</h1>
                <form onSubmit={this.createDev} ref="_devform">
                    <div className="form-group">
                        <label htmlFor="devname">Name: </label>
                        <input id="devname" className="form-control" ref="_name" type="text" placeholder="your name here..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="devdesc">Skills:</label>
                        <input id="devdesc" className="form-control" ref="_desc" type="text" placeholder="tell us more about you..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="devdesc">Photo:</label>
                        <input id="devphoto" className="form-control" ref="_photo" type="text" placeholder="photo url..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="devemail">Email address:</label>
                        <input type="email" className="form-control" id="devemail" ref="_email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="devpassword">Password</label>
                        <input type="password" className="form-control" id="devpassword" placeholder="Password" ref="_password"></input>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" ref="_status"></input>
                            I'am available
    </label>
                    </div>
                    <button className="btn btn-primary">ADD</button>

                </form>
            </div>
        )
    }
}
DevForm = connect()(DevForm)
export default DevForm;