/* eslint-disable */
import React from 'react';
import DevForm from './DevForm';
import DevList from './devList';
import sampleDevs from '../sample-dev'
import base from '../base'
import Header from './Header'


class App extends React.Component {

  constructor() {

    super()
// initial state
    this.state = {
      devs: [],
      jobs: [],
      clients: []
              }
    this.addDev = this.addDev.bind(this)
    this.loadDevs = this.loadDevs.bind(this)
    this.removeDev = this.removeDev.bind(this)
  }

  componentDidMount() {
    this.loadDevs()
  }
 /**
  * method to add new developer 
  */
  addDev(dev) {
    const devs = this.state.devs.slice();
    devs.push(dev)
    const itemsRef = base.database().ref('devs');
    console.log("connected to the database")
    itemsRef.push(dev);
    this.setState({ devs })
  }
  updateDev(id,updatedDev) {
    const itemsRef = base.database().ref('devs');
    const devs = this.state.devs.slice();
    for (let i in projects) {
      if (devs[i].id == id) {
         devs[i] = updatedDev;
         itemsRef[i]= updatedDev;
         break; //Stop this loop, we found it!
      }
    }
       
    this.setState({ devs })
  }
  removeDev(id){
    const devs = this.state.devs.slice().filter(ele=>ele.id!==id)
    this.setState({ devs })
  }
  /**
   * load the initial dev data
   */
  loadDevs() {
  //  const itemsRef = base.database().ref('devs');
   
  const itemsRef = base.database().ref('devs');
  itemsRef.on('value', (snapshot) => {
    let devs = snapshot.val();
    let newState = [];
    for (let dev in devs) {
      newState.push({
        id: devs[dev].id,
        name: devs[dev].name,
        desc: devs[dev].desc,
        image: devs[dev].image,
        price: devs[dev].price,
        status: devs[dev].status


      });
    }
    this.setState({
      devs: newState
    });
    
   
  });
  }

  
// finally we rander our app
  render() {
    return (
      <div >
       <Header /> 
       <DevList loadSamples={this.loadSamples} devs={this.state.devs} removeDev={this.removeDev} /> 
        <DevForm data="send some data from parents" addDev={this.addDev} />
        <h2 >  </h2>
      </div>
    )
  }
}

export default App;
