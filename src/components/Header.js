/* eslint-disable */
import React from 'react';
import style from './style.css'
/*just for a merge test */
class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-inverse top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TIQA shared <i className="fa fa-handshake-o shared" aria-hidden="true" ></i>confidence</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        
                        <li><a href="dev">Developers</a></li>
                        <li><a href="jobs">Jobs</a></li>
                    </ul>
                </div>
            </nav>)
    }
}
export default Header;