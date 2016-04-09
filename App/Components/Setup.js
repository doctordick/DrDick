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

class Setup extends Component {
  nextRoute() {
    console.log('helloo');
  }

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
      console.log('input', input);
      return <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
        key={input.label}
        placeholder={input.label}
        secureTextEntry={input.secure}
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

  renderScene(route, navigator){
    return (
      <View style={styles.container}>
        {this.inputGenerator()}
        <Text>
          Dr. Dick is HIPAA compliant and secures your data with encryption.
        </Text>
        <TouchableHighlight
          onPress={this.props.nextRoute.bind(this, {id: 'Questionnaire', title: 'Recent HIV & STD Tests'})}>
          <View>
            <Text >Next</Text>
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

export default Setup
