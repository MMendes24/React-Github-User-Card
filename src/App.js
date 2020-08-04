import React from 'react';
import CardConstructor from './components/CardConstructor'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    users: [{
      name: '',
      login: '',
      bio: '',
      location: '',
      following: '',
      followers: '',
      id: '',
    }]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/mmendes24')
    .then(res => {
      this.setState({
        users: [res.data]
      })
      console.log(this.state.users[0].bio)
    })
    .catch( () => {
      console.log("Sorry New Orleans!")
    })
  }

  render() {
    console.log("Number two")
    return <div>
      <CardConstructor details={this.state.users}/>
    </div>
  }
}

export default App;
