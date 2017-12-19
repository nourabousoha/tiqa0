/* eslint-disable */
import React from 'react';
import DevForm from './DevForm';
import DevList from './devList';
import Header from './Header'
import { connect } from 'react-redux'



class App extends React.Component {
// finally we rander our app

componentDidMount(){

}
  render() {
    return (
      <div >
       <Header /> 
       <DevList  /> 
        <DevForm data="send some data from parents"  />
        <h2 >  </h2>
      </div>
    )
  }
}
App = connect()(App)

export default App;
