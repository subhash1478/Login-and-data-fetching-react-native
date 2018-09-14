import React from 'react';
import { Text, View, TouchableOpacity,FlatList, StyleSheet ,Image,RefreshControl} from 'react-native'
import { Actions } from 'react-native-router-flux';
import {getCategory} from '../services/webservices'
class Dashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      names: [],
      refreshing:false
    };
  }
  componentDidMount() {
    getCategory().then((result) => {
      let resultdata=result.data
      this.setState({ names:resultdata })
    }).catch((err) => {
    });
  }



  refresh = () => {
    this.setState({ refreshing: true, names: [] });
    setTimeout(() => this.setState({ refreshing: true}), 1500);
  };




  _onPressItem = () => {
    // updater functions are preferred for transactional updates
    alert()
  };
  renderItem = ({ item }) => {
    return (
      <View style={styles.flatview}>
      <TouchableOpacity onPress={() => Actions.Post()}>
      <Image style={{width: 50, height: 50}}
      source={{uri: item.image}} />
      <Text style={styles.name}>{item.title}</Text>
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
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refresh}
          />
        }
        />
        </View>
        );
      }
    }
    export default Dashboard;
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