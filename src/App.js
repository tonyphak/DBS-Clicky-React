import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/header.js";
import friends from "./friends.json";
import NavBar from "./components/NavBar/NavBar.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clickedFriends: [],
    topScore: 0
  };

  //function to track top score when player wins or loses
  highScore = () =>{
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
      console.log(this.state.topScore)
    };
  };
  
  // function to track score after clicking
  addCounter = (event) =>{
    //clicking card will add to the score
    //clicking card will assign the card a number 1. If the clicked card already has number 1 then player loses and random sorts
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
        score ={this.state.score}
        topScore={this.state.topScore}/>
        <Header/>
        {this.state.friends.map(friend => (
          <FriendCard
            addCounter={this.addCounter}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            name={friend.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
