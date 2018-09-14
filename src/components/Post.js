import React from 'react';
import { Text, View, TouchableOpacity,FlatList, StyleSheet ,Image} from 'react-native'
 import { Actions } from 'react-native-router-flux';
 import {getCategory} from '../services/webservices'
class Post extends React.Component {
constructor(){
  super()
  this.state = {
    names: [],
  };
}
componentDidMount() {
  getCategory().then((result) => {
let resultdata=result.data
this.setState({ names:resultdata })
  }).catch((err) => {
  });
}
  render() {
      return (
        <View style={styles.container} >
        <Text style={styles.h2text}>
Category        </Text>
          <FlatList  onPress = {
        () => Actions.Post()      }
          data={this.state.names}
          showsVerticalScrollIndicator={false}
           renderItem={({item}) =>
          <View style={styles.flatview}>
          <Image style={{width: 50, height: 50}}
          source={{uri: item.image}}
          />
            <Text style={styles.name}>{item.title}</Text>
           </View>
          }
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