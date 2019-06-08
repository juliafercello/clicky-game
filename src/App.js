import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
// import { ReactComponent } from "*.svg";

class App extends Component {
  state = {
    cards
  };

  render() {
    return (
      <Wrapper>        
        {this.state.cards.map(card => (
          <Card
            id = {card.id}
            image={card.image}
          />
        ))}

      </Wrapper>
    )
  }
}

  export default App;
