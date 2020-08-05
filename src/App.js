import React from 'react';
import CardConstructor from './components/CardConstructor'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    users: [
      {
      name: 'Mars',
      login: '',
      bio: '',
      location: '',
      following: '',
      followers: '',
      id: '',
    }
  ],
  followers: [
    {
      id: '',
      login: ''
    }
  ]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/mmendes24')
    .then(res => {
      this.setState({
        users: [res.data]
      })
      console.log(this.state.users[0])
    })
    .catch( () => {
      console.log("Sorry New Orleans!")
    })
    axios.get('https://api.github.com/users/mmendes24/followers')
    .then(res2 => {
      this.setState({
        followers: res2.data
      })
      console.log(res2.data)
    })
  }


  render() {
    console.log(this.state.followers)
    return <div className="app-container">
      <h1>Github users of the world!</h1>
      <CardConstructor details={this.state.users}/>

      <h2>Followers by username:</h2>

      {this.state.followers.map(follower => (
        <div key={follower.id}>
          <p>Follower: {follower.login}</p>

        </div>
      ))}
    </div>
  }
}

export default App;
