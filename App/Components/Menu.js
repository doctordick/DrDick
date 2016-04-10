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
    } else if(previousState === 'Questionnaire') {
      inputs = [{
          label: "Recommended Tests",
          nextRouteId: 'Recommendations',
          title: ''  
      }, {
          label: "Recommended Vaccinations"
      }, {
          label: "Start Over"
      }]
    }


    return inputs.map(function(input, index) {
      if(input.nextRouteId){
        return (
          <TouchableHighlight 
            underlayColor={"#ffffff"} 
            key={index} 
            onPress= {
             context.props.nextRoute.bind(context, { id: input.nextRouteId , title:'' }) 
            }
          >
            <View>
              <Text style={styles.menuItem}>{input.label}</Text>
            </View>
          </TouchableHighlight>
        ); 
      } else {
        return (
          <TouchableHighlight
            underlayColor={"#ffffff"}  
            key={index}
            >
            <View>
              <Text style={styles.menuItem}>{input.label}</Text>
            </View>
          </TouchableHighlight>
        );
      }
    });

  }

  generateText() {
    let previousState = this.findPreviousState(),
        text = {};
    if(previousState === 'Setup') {
      text.header = 'New Session';
      text.message = (
        <View>
          <Text style={styles.text}>
            Welcome Henry, Dr. Dick is happy to see you! What would you like to do?
          </Text>
        </View>
      )  
    } else if(previousState === 'Questionnaire') {
      text.header = 'Recommendations';
      text.message = (
        <View>
          <Text style={styles.text}>
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
      <View style={{backgroundColor:'#0C94B9', flex:1}}>
        <Header navigator={this.props.navigator} value={this.generateText().header} />
        <View style={styles.container}>
          {this.generateText().message}
          {this.generateMenuItems()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: '#35A5C2',
    margin: 5,
    width: 300,
    color: '#fff',
    fontSize: 16
  },
  text: {
    width: 300,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    color: '#fff'
  }
});

export default Menu
