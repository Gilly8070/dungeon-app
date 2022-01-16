import React from 'react';
import './App.css';
import Card from './Card';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [{
        id: 1,
        name: 'Player 1',
        initiative: 20,
        hitPoints: 22,
      }, {
        id: 2,
        name: 'Player 2',
        initiative: 16,
        hitPoints: 42,
        },
        {
        id: 3,
        name: 'Player 3',
          initiative: 15,
        hitPoints: 32,
        },
        {
        id: 4,
        name: 'Player 4',
          initiative: 11,
        hitPoints: 52,
        },
      ]
    }
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
    this.updateHitPoints = this.updateHitPoints.bind(this);
  }
  updateName(id, e) {
    const { value } = e.target;
    const element = this.state.elements;
    const index = element.findIndex(el => el.id === id);
    element[index].name = value;
    this.setState({ element });
  }
  updateHitPoints(id, e) {
    const { value } = e.target;
    const element = this.state.elements;
    const index = element.findIndex(el => el.id === id);
    element[index].hitPoints = Number(value);
    this.setState({ element });
  }
  updateInitiative(id, e) {
    clearInterval(this.timeout);
    const { value } = e.target;
    const element = this.state.elements;
    const index = element.findIndex(el => el.id === id);
    element[index].initiative = Number(value);
    this.setState({ element });
    this.timeout = setTimeout(() => this.sortElements(), 500);

  }

  sortElements() {
    const { elements } = this.state;
    this.setState({elements: elements.sort((l,r) => r.initiative - l.initiative )})
  }
  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.map(element => 
          <Card
            key={element.id}
            name={element.name}
            initiative={element.initiative}
            hitPoints={element.hitPoints}
            id={element.id}
            onNameChange={this.updateName}
            onInitiativeChange={this.updateInitiative}
            onHitPointsChange={this.updateHitPoints}
          />
          )}
      </div>
    )
  }
}

export default App;
