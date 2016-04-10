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
      <View style={{flex: 2}}>
        <View>
        <Text style={styles.title}>
          {this.props.std.toUpperCase()}
        </Text>
        </View>
        {this.props.procedures.map((procedure, index)=>{
          return <Text style={styles.text} key={index}> { procedure } </Text>
        })}
      </View>
       <TouchableHighlight 
         underlayColor={"#0C94B9"}
          onPress={this.props.viewMap}>
          <View style={styles.locationButton}>
            <Text style={styles.locationText}>
              {this.props.testCenters}
            </Text>
            <Text style={{fontSize: 30, color: '#fff'}}>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;
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
    margin: 10,
    paddingTop: 10,
    // paddingBottom: 10,
    backgroundColor: '#35A5C2',
    width: 350,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1, 
      width: 0
    }
  },
  title: {
    color: '#fff', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  }, 
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3
  },
  locationButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderTopWidth: 1, 
    borderColor: '#0483ad',
    paddingLeft: 80,
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    fontSize: 16
  },


});

export default Card
