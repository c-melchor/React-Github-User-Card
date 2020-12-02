import React from "react";
import "./App.css";
import UserInfo from "./Components/UserInfo";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
    console.log("comp state setup");
  }
  componentDidMount() {
    //this will be used for the loading of data,
    //dont know how long it will take for the data to come back
    //need to be able to render our component with no data, wait for it to load
    axios
      .get("https://api.github.com/users/c-melchor")
      .then(res => {
        this.setState({
          user: res
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    console.log("App:component mounted");
  }

  render() {
    console.log("App:comp rendered");
    return (
      <div className="App">
        <h1>GitHub Profile Info</h1>
        {this.state.user.length === 0 ? (
          <h1>...loading data</h1>
        ) : (
          <UserInfo user={this.state.user} />
        )}
      </div>
    );
  }
}

export default App;
