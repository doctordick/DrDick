import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

class Next extends Component {
  render() {
    return (
      <View>
          <TouchableHighlight
            underlayColor={"#0C94B9"}
            onPress={this.props.nextRoute.bind(this, this.props.nextRouteInfo)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
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
  button: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45,
    paddingRight: 45,
    alignItems: 'center',
    backgroundColor: '#00bbbb',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  },
});

export default Next
