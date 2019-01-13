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
  
  //when you click on a card ... the friend is taken out of the array
  cardClick = (event) => {
    const currentFriend = event.target.alt;
    console.log(currentFriend);
    const friendClicked = this.state.clickedFriends.indexOf(currentFriend) > -1;

    //if you click on a friend that has already been selected, the game is reset and cards reordered
    if (friendClicked) {
      this.setState({
        friends: this.state.friends.sort(() => 0.5 - Math.random()),
        clickedFriends: [],
        score: 0
      });
        alert("You lose");
        this.highScore();

    //if you click on an available friend, your score is increased and cards reordered
    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(currentFriend),
          score: this.state.score + 1
        },
    //if you get all 12 friend corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.highScore();
            this.setState({
              friends: this.state.friends.sort(() => 0.5 - Math.random()),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

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
            addCounter={this.cardClick}
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
