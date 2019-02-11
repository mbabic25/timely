import React, { Component } from 'react';
import './Project.css';
import ProjectTable from '../projectTables/ProjectTable';


class Project extends Component {
    constructor(props){
      super(props);

      this.state={
        items: [],
        isLoaded: false,
      };

      this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
      fetch('http://localhost/react-php/api/index.php')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  items: json
              })
          });
  }

  addItem(e){
    e.preventDefault();
    fetch("http://localhost/react-php/api/index.php?action=insert&projName=" + this._inputElement.value).then(()=>{
    fetch('http://localhost/react-php/api/index.php')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
      });
  }


    render(){
      var{ isLoaded } = this.state;

      if(!isLoaded){
        return <div>Loading...</div>;
      }

      else{
        return(
          <div className="ProjectMain">
          <form id="123">
              <input 
                placeholder="Project name" 
                ref={(a) => this._inputElement=a} 
              />
              <div id="botun" onClick={this.addItem}> +Add new project </div>
          </form>
            <ProjectTable entries={this.state.items}/>
             
          </div>
      );
    }
  }
  }
  
  export default Project