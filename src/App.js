import React, { Component } from 'react'
import './App.css';
import Project from './components/projects/Project.js'
import ProjectTable from './components/projectTables/ProjectTable.js'

class App extends Component {
  inputElement = React.createRef()
  constructor(props) {
  super(props)
  this.state={
    items: []
    };
  }    
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Timely</h1>
        </header>
        <Project />
        <ProjectTable
          entries={this.state.items}
        />
      </div>
    );
  }
}

export default App;
