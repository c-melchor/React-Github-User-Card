import React from "react";
import Axios from "axios";
import "../styles/followers.css";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    Axios.get("https://api.github.com/users/c-melchor/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="followersDiv">
        {this.state.followers.map(follower => (
          <div className="lilFollowersDiv" key={follower.id}>
            <p>{follower.login}</p>
            <img src={follower.avatar_url} alt={follower.login} />
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
