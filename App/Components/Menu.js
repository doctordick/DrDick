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

import Header from './Header';

class Menu extends Component {

  findPreviousState() { 
    let previousState = this.props.navigator.state.routeStack;
    return previousState[previousState.length - 2].id;
  }

  pressHandler(input) {
 
  }

  generateMenuItems() {
    let previousState = this.findPreviousState(),
        inputs = [],
        context = this;

    if(previousState === 'Setup') {
      inputs = [{
          label: "Update Info"
      }, {
          label: "Get Recommendations",
          nextRouteId: 'Loading',
          title: ''  
      }, {
          label: "Set Reminders"
      }, {
          label: "Get Tested"
      }];
    } else if(previousState === 'Loading') {
      inputs = [{
          label: "Recommended Tests"
      }, {
          label: "Recommended Vaccinations"
      }, {
          label: "Start Over"
      }]
    }


    return inputs.map(function(input, index) {
      return (
        <TouchableHighlight 
          key={index} 
          onPress= {
           context.props.nextRoute.bind(context, { id: input.nextRouteId , title:'' }) 
          }
        >
          <View>
            <Text >{input.label}</Text>
          </View>
        </TouchableHighlight>
      );
    });

  }

  generateText() {
    let previousState = this.findPreviousState(),
        text = {};
    if(previousState === 'Setup') {
      text.header = 'New Session';
      text.message = (
        <View>
          <Text>
            Welcome Henry, Dr. Dick is happy to see you!
          </Text>
          <Text>
            What would you like to do?
          </Text>
        </View>
      )  
    } else if(previousState === 'Loading') {
      text.header = 'Recommendations';
      text.message = (
        <View>
          <Text>
            Here are Dr. Dick's recommendations:
          </Text>
        </View>
      )
    }
    return text;
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
        <Header value={this.generateText().header} />
        {this.generateText().message}
        {this.generateMenuItems()}
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
  }
});

export default Menu
