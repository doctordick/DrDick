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

import Recommendations from "./Recommendations"
import Map from "./Map"

class Card extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.std}
        </Text>
        <Text>
          {this.props.procedures}
        </Text>
       <TouchableHighlight onPress={this.props.viewMap}>
          <View>
            <Text>
              {this.props.testCenters}
            </Text>
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

export default Card
