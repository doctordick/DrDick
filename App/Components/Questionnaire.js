import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

class Questionnaire extends Component {
  nextRoute() {
    console.log('helloo');
  }

  render() {
    return (
        <Navigator
          renderScene={this.renderScene.bind(this)}
        />
    );
  }

  renderScene(route, navigator){
    return (
      <View style={styles.container}>
        <Text>
          Questionnaire
        </Text> 
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
  },
});

export default Questionnaire
