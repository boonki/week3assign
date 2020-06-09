import React, { Component } from "react";
import ChildComponent from './ChildComponent';

const initialState = [
  { id: 1, name: "Merlin" },
  { id: 2, name: "Arthur" },
  { id: 3, name: "Gwaine" },
  { id: 4, name: "Percival" }
]

class HomePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      knights: initialState
    };
  }

  deleteKnight(id) {
    this.setState({
        knights: this.state.knights.filter((knight) => {
            return(
                knight.id !== id
            )
        })
    })
  }

  render() {
    return <ChildComponent knights={this.state.knights} deleteKnight={deleteKnight} />;
  }
}



export default HomePageComponent;
