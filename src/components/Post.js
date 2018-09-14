import React from 'react';
import { Text, View, TouchableOpacity,FlatList, StyleSheet ,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
import {getPost} from '../services/webservices'
class Post extends React.Component {
  constructor(){
    super()
    this.state = {
      names: [],
    };
  }
  componentDidMount() {
     getPost({id:this.state.id}).then((result) => {
      let resultdata=result.data

       this.setState({ names:resultdata })
    }).catch((err) => {
    });
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.flatview}>
      <TouchableOpacity  >
  
      <Text style={styles.name}>{item.result.title}</Text>
      </TouchableOpacity>
      </View>
      );
    };
    render() {
      return (
        <View style={styles.container} >
        <Text style={styles.h2text}>
        Category        </Text>
        <FlatList        
        data={this.state.names}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
        
        />
        </View>
        );
      }
  }
  export default Post;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 14,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 5,
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
  });