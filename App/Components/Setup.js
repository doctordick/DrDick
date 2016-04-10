import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Next from "./Next"
import Header from "./Header"

class Setup extends Component {
  inputGenerator() {
    let inputs = [{
        label: "First Name",
        value: ""
    }, {
        label: "Last Name",
        value: ""
    }, {
        label: "Email",
        value: ""
    }, {
        label: "Password",
        value: "",
        secure: true
    }];

    return inputs.map(function(input) {
      return (
        <View key={input.label} style={styles.input}>
          <TextInput style={styles.textInput}
            placeholder={input.label}
            placeholderTextColor={"#ffffff"}
            secureTextEntry={input.secure}
             />
         </View>
        )
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
      <View style={{backgroundColor:'#0C94B9', flex: 1}}>
        <Header value="Setup" navigator={this.props.navigator}/>
        <View style={styles.container}>
          {this.inputGenerator()}
          <Text style={styles.infoText}>
            Dr. Dick is HIPAA compliant and secures your data with encryption.
          </Text>
          <Next nextRoute={this.props.nextRoute} 
                nextRouteInfo={{id: 'Menu', title: 'New Session'}}
                navigator={this.props.navigator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 11,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: { 
    borderColor: '#19c3f5', 
    borderBottomWidth: 2, 
    marginBottom: 20
  },
  infoText: {
    marginLeft: 20, 
    marginRight: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
  textInput:{
    height: 35, 
    color: 'white',
    width: 300
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Setup
