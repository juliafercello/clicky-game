import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScoreCard from "./components/ScoreCard";
import cards from "./cards.json";

import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    message: "Click a flower to get started"
  };

  handleClickEvent = (id) => {
    //find the index for the clicked card 
    const cardIndex = this.state.cards.findIndex(card => card.id === id);

    // check to see if it has been clicked
    if (!cards[cardIndex].clicked) {

      //increase score
      this.setState({ score: this.state.score + 1 });

      //Update clicked to true 
      let clickedCard = this.state.cards[cardIndex];
      clickedCard.clicked = true;
      cards[cardIndex] = clickedCard;

      this.setState({ cards: cards });

      //check to see if the game is over
      const gameOver = this.state.cards.filter(card => card.clicked === false);
      if (gameOver.length > 0) {
        this.shuffleCards();
        this.setState({ message: "Great guess!" });
      }
      else {
        //winner winner 
        this.setState({ message: "You won!!" });
        this.resetGame();
      }
    }
    //already clicked. Game Over. 
    else {
      this.setState({ message: "Oops, try again!" });
      this.resetGame();
    }
  }

  shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  resetGame = () => {
    //set score to zero
    this.setState({ score: 0 });

    //set clicked to false for each card
    for (let i = 0; i < cards.length; i++) {
      cards[i].clicked = false
    }
    this.setState({ cards: cards });

    //move the cards
    this.shuffleCards();
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar
            message={this.state.message}
            score={this.state.score}
          />
          <ScoreCard
            message={this.state.message}
            score={this.state.score}
          >
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                image={card.image}
                name={card.name}
                handleClickEvent={this.handleClickEvent}
              />
            ))}
          </ScoreCard>
        </Wrapper>
        <Footer />
      </div>

    )
  }
}

export default App;
