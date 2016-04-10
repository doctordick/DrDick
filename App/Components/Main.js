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
            <Text style={styles.title}>
              Doctor Dick
            </Text>
            <Text style={styles.subtitle}>
              Our Dick Helps Keep Yours Healthy
            </Text>
            <TouchableHighlight
              onPress={this.props.nextRoute.bind(this, { id: 'Setup', title: 'Setup' })}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 50,
    fontSize: 23
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    backgroundColor: '#00bbbb',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  },
});

export default Main
