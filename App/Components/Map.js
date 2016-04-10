import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator, 
  MapView
  
} from 'react-native';

import Header from "./Header"


var markers = [
  {
    latitude: 37.782286,
    longitude: -122.3973877,
    title: 'HIV & STD testing center',
    subtitle: '1234 Jameston Drive'
  }, 
  {
    latitude: 37.782701,
    longitude: -122.3955693,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  },
  {
    latitude: 37.785084,
    longitude: -122.3973073,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  },
  {
    latitude: 37.7868985,
    longitude: -122.3995765,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  }
];

class Map extends Component {
  render() {
    return (
        <Navigator
          renderScene={this.renderScene.bind(this)}
          />
      );

  }
  renderScene(route, navigator){
    return (
      <View>
        <Header value="Map" navigator={this.props.navigator}/>
        <View style={styles.container}>
          <MapView 
            showsUserLocation={true}
            showsPointsOfInterest={false}
            annotations={markers} 
            style={{flex: 1, flexDirection: 'row'}} 
            region={{
              latitude: 37.782286,
              longitude: -122.3973877, 
              latitudeDelta: .01,
              longitudeDelta: .01 }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
  
});



export default Map
