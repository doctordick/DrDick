import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

class Main extends Component {
  render() {
    return (
        <Navigator
          renderScene={this.renderScene.bind(this)}
          />

      );

  }
  renderScene(){
    return (
      <View style={styles.container}>
            <Text style={styles.welcome}>
              Dr. Dick
            </Text>
            <Text style={styles.instructions}>
              Our Dick Helps Keep Your's Healthy
            </Text>
            <TouchableHighlight
              onPress={this.props.nextRoute.bind(this, { id: 'Setup', title: 'Setup' })}>
              <View>
                <Text >Get Started</Text>
              </View>
            </TouchableHighlight>

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

export default Main
