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
  viewMap(){
    this.props.nextRoute({id:'Map', title: 'Map View'});
  }

  recGenerator() {
    let context = this;
    const recommendations = [{
        std: 'HIV/STD',
        procedures: ['Blood Test', 'Oral Swab Test', 'Urine Test'],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Gonorrhea',
        procedures: ['Urine Test','Nucleic acid amplification tests', 'Gonorrhea culture'],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Hepatitis B',
        procedures: ['Blood Test'],
        testCenters: 'Find a Testing Center'
      }];
    return recommendations.map(function(rec, index) {
      return <Card
        viewMap={context.viewMap.bind(context)}
        std={rec.std}
        key={index}
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
      <Header value="Recommendations" navigator={this.props.navigator}/>
        {this.recGenerator()}     
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
