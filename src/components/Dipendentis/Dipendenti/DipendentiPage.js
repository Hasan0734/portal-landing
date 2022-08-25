import React, { Component } from 'react'
import Team from './Team';
import Tutti from './Tutti';

export default class DipendentiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tutti",
    };
  }

  handleTab =(name) => {
    this.setState({
       activeTab: name
     })
  }
  render() {
    return <>
        {this.state.activeTab === 'tutti' && <Tutti activeTab={this.state.activeTab} handleTab={this.handleTab}/>}
        {this.state.activeTab === 'team' && <Team activeTab={this.state.activeTab} handleTab={this.handleTab}/>}
      </>;
  }
}
