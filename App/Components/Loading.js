import React, {
  Component,
  Text,
  View
} from 'react-native';

class Loading extends Component {

  findPreviousState() { 
    let previousState = this.props.navigator.state.routeStack;
    return previousState[previousState.length - 2].id;
  }

  generateText(){
    let previousState = this.findPreviousState(),
        text;
    if(previousState === 'Menu'){
      text = 'Hi! Dr. Dick has more questions for you...';
    } else if(previousState === 'Questionnaire') {
      text = 'Generating recommendations...';
    }

    return text;
  }
  
  componentWillMount() {
    let previousState = this.findPreviousState(),
        nextRouteId;

    if(previousState === 'Menu'){
      nextRouteId = 'Questionnaire';
    } else if(previousState === 'Questionnaire') {
      nextRouteId = 'Recommendations';
    }

    const navigator = this.props.navigator;

    setTimeout(() => {
      navigator.replace({
        id: nextRouteId,
      });
    }, 1500);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>{this.generateText()}</Text>
      </View>
    );
  }
}
export default Loading
