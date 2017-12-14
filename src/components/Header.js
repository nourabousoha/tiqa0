import React from 'react';

class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Tiqa confident on the futur</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
      <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </nav>)
    }
}
export default Header;