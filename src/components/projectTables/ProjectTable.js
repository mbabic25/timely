import React, {Component} from 'react'

class ProjectTable extends Component {

    createProject(item) {
        return (
            <li key={item.id}>
                 {item.Name}
                 <div id="btnStart" > Start </div>
                 <div id="btnDelete">  Delete </div>
                 
            </li>
          )
    }

    render() {
        var ProjectEntries= this.props.entries;
        var listItems = ProjectEntries.map (this.createProject);
        return (
            <ul className="theList"> 
            {listItems }
            </ul>
            );
    }
}

export default ProjectTable