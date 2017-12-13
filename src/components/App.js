import React from 'react';
import DevForm from './DevForm';
import DevList from './devList';
import sampleDevs from '../sample-dev'
import base from '../base'


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
    this.loadSamples = this.loadSamples.bind(this)
    this.removeDev = this.removeDev.bind(this)
  }
  
 /**
  * method to add new developer 
  */
  addDev(dev) {
    const devs = this.state.devs
    devs.push(dev)
    const itemsRef = base.database().ref('devs');
    itemsRef.push(dev);
    this.setState({ devs })
  }
  removeDev(id){
    const devs = this.state.devs.filter(ele=>ele.id!==id)
    this.setState({ devs })
  }
  /**
   * load the initial dev data
   */
  loadSamples() {
    this.setState({
      devs: sampleDevs
    });
  }

  
// finally we rander our app
  render() {
    return (
      <div >
       <DevList loadSamples={this.loadSamples} devs={this.state.devs} removeDev={this.removeDev} /> 
        <DevForm data="send some data from parents" addDev={this.addDev} />
        <h2 >  </h2>
      </div>
    )
  }
}

export default App;
