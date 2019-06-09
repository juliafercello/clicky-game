import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
// import { ReactComponent } from "*.svg";

class App extends Component {
  state = {
    cards,
    score: 0
  };

  handleClickEvent = (id) => {
    //on click, need to get the thing clicked and check to see if already clicked. 

    //find the index for the clicked card and check to see if it has been clicked
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    console.log(cardIndex);

    if (!cards[cardIndex].clicked) {
      alert("card is not clicked yet");

      //set score
      console.log("current Score" + this.state.score)
      this.setState(
        { score: this.state.score + 1 },
        () => {
          console.log("score" + this.state.score)
        }
      );

      //Update clicked to true for the applicable card
      let updateCard = this.state.cards[cardIndex];
      updateCard.clicked = true;
      cards[cardIndex] = updateCard;

      this.setState({ cards: cards });
      console.log(cards[cardIndex]);

      //check to see if the game is over
      const gameOver = this.state.cards.filter(card => card.clicked === false);
      if (gameOver.length > 0) { 
        //game goes
        //shuffle.
      }
      else {
          //winner winner 
        alert("you win!!")
        }
    }
    //already clicked.  Game Over. 
    else {
      alert("you lose");
    }

    //if already clicked, start over.
    //if not already clicked, mark as clicked, increase score, check to see if the game is over
    //if game is not over, shuffle cards.
    //if game is over, message the user and let them start over.  leave score as it is?
    // return (
    //   alert("you clicked me! " + id)
    // )
  }


  render() {
    return (
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
