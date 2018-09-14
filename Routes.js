import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/components/Login'
import Dashboard from './src/components/Dashboard'
import Post from './src/components/Post'

import {ActivityIndicator, AsyncStorage} from 'react-native';
class Routes extends Component {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }
  componentDidMount() {
    AsyncStorage.getItem('TASKS').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }
  render(){
     
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
        )
      } else {
        return (
          <Router>
          <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={!this.state.hasToken}
          />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard" initial={this.state.hasToken}
          />
                <Scene key="Post" component={Post} title="Post"  
          />
          </Scene>
          </Router>
          );
        }
      } 
    }
    export default Routes;