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

import Next from "./Next"
import Header from "./Header"
import Card from "./Card"

class Recommendations extends Component {
  recGenerator() {

    const recommendations = [{
        std: 'HIV/STD',
        procedures: ['Blood Test', 'Oral Swab Test', 'Urine Test'],
        testCenters: '<a>Find a Testing Center</a>'
      }, {
        std: 'Gonorrhea',
        procedures: ['Urine Test','Nucleic acid amplification tests', 'Gonorrhea culture'],
        testCenters: '<a>Find a Testing Center</a>'
      }, {
        std: 'Hepatitis B',
        procedures: ['Blood Test'],
        testCenters: '<a>Find a Testing Center</a>'
      }];

    return recommendations.map(function(rec) {
      return <Card
        std={rec.std}
        procedures={rec.procedures}
        testCenters={rec.testCenters}
         />;
    });
  }

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
        {this.recGenerator()}
        <Text>
          Dr. Dick is HIPAA compliant and secures your data with encryption.
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

export default Recommendations
