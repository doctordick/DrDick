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
        <Text style={styles.title}>
          {this.props.std.toUpperCase()}
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
    margin: 5,
    backgroundColor: '#35A5C2',
    width: 350
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24

  }
});

export default Card
