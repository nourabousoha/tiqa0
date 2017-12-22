import React from 'react';
import { connect } from 'react-redux'
import { removeDev } from '../states/actions'
import { toggleEditDev } from '../states/actions'
/**
 * render the dev componenet 
 */
function DevEditRemove(props){
    const edit = props.edit
    const remove = props.remove 
   const  val = props.val
    return (
        <div className="row col-md-6">
        <div className="form-inline  ">

            <div className="input-group col-md-1 dev-edit-remove-button">
                <a className="form-control btn btn-danger devbutton " type="submit" onClick={remove}><i className="fa fa-trash-o" aria-hidden="true">&nbsp;</i>
                    </a>

            </div>
            <div className="input-group col-md-1 col-md-offset-2">
                <a className="form-control btn btn-success dev-edit-remove-button" type="submit" onClick={edit}
                    key={val.id}><i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;</i>
                    </a>

</div>
        </div>

    </div>
    )
}    

function RenderDev(props){
    const val = props.val
    const edit = props.edit
    const remove = props.remove 
return  (<div className="panel panel-primary dev" >
<div className="panel-heading">
    {val.name}
</div>
<div className="container">
    <div className="row">
        <div className="col-md-2">
            <img className="dev-photo img-responsive img-circle" src={val.image} alt="an alternative" />
        </div>

        <h3 >{val.status}</h3>
        <div className="col-md-5">
            <p >{val.desc}</p>
        </div>
    </div>


    <div>

    </div>



</div>
<DevEditRemove     val={val} edit={edit} remove={remove}     />

</div>
)
}


class Dev extends React.Component {
    constructor(props) {

        super(props)
        this.remove = this.remove.bind(this)
        this.edit = this.edit.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    val = this.props.val
    cancel(e){
        e.preventDefault();
        console.log('canceled')
        this.props.toggleEditDev()
    }
    onChange(e){
        e.preventDefault();
        console.log('change occuring')
           }
    edit(e){
        e.preventDefault();
        const id = this.val.id
       // const { name, desc,photo,password,status } = this.val
        this.props.toggleEditDev(id)
        const { _name, _desc,_photo,_password,_status,_devform } = this.refs
             console.log('Gonna a edit this dev'+ _name)
    }
    remove(e) {
        e.preventDefault();
        const id = this.val.id
        console.log('Gonna a remove this dev')
        this.props.removeDev(id)
    }
    renderDevOrEditField() {
       if (this.props.toggleEdit ===this.val.id) {
            // handle  edit fields here
            return <div className="container"> <div className="row col-md-12 text-center edit-form-container" >

                <div className="row col-md-6 col-md-offset-3 ">
                    <form ref="_devform" className="form form-horizontal" >
                        <div className="form-group">
                            <label htmlFor="devname" className="control-label col-sm-2">Name: </label>
                            <div className="col-sm-6">   <input id="devname" onChange={this.onChange} className="form-control" ref="_name" type="text" placeholder="your name here..." value={this.val.name}required /></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="devdesc" className="control-label col-sm-2">Skills:</label>
                            <div className="col-sm-6"> <input id="devdesc" className="form-control" ref="_desc" type="text" placeholder="tell us more about you..." required value={this.val.desc}/></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="devdesc" className="control-label col-sm-2">Photo:</label>
                            <div className="col-sm-6">   <input id="devphoto" className="form-control" ref="_photo" type="text" placeholder="photo url..." required value={this.val.image}/></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="devemail" className="control-label col-sm-2">Email address:</label>
                            <div className="col-sm-6">  <input type="email" className="form-control" id="devemail" ref="_email" aria-describedby="emailHelp" placeholder="Enter email" ></input></div>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="devpassword" className="control-label col-sm-2">Password</label>
                            <div className="col-sm-6"> <input type="password" className="form-control" id="devpassword" placeholder="Password" ref="_password"></input></div>
                        </div>
                        <div className="form-check">
                            <label className="control-label form-check-label col-sm-2" >I'am available</label>
                           <input type="checkbox" className="form-check-input" ref="_status"></input>

                        </div>
                        <div className="row cancel-update">
                        <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>{this.updateDev} 
                        <button className="btn btn-success" onClick={this.updateDev}>Update</button>
                        </div>
                    </form>
                </div>
            </div></div>

            // Handle rendering.
        } else {
            return     <div class="container">
                        <RenderDev val={this.val} edit={this.edit} remove={this.remove}/> 
                       
                       </div>

        }
    }
    
    
    render() {
        return (
            <div>
            {this.renderDevOrEditField()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        devs: state.devs,
        toggleEdit:state.app.toggleEdit,
        showAddDev:state.app.showAddDev

    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeDev: id => {
            dispatch(removeDev(id))
        },
        toggleEditDev:id => {
            dispatch(toggleEditDev(id))
        }
    }
}


Dev = connect(mapStateToProps, mapDispatchToProps)(Dev)
export default Dev; 