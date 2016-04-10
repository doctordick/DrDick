import React, {
  AppRegistry,
  Component,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Header from './Header';

class Question extends Component {
  nextQuestion() {
    this.props.nextQuestion();
  }

  generateOptions() {
    let context = this;
    const options = [
      "Less than 1 month ago", 
      "1 to 3 months ago",
      "3 to 6 months ago ",
      "More than 6 months ago"
    ];

    return options.map((option, index)=>{
      return (
        <TouchableHighlight 
          underlayColor={"#ffffff"} 
          onPress={context.nextQuestion.bind(context)} 
          key={index}
          activeOpacity= {4}
          >
          <View>
            <Text style={styles.option}>
              {option}
            </Text>
          </View>
        </TouchableHighlight> 
      );
    });
  }

  render() {
    return (
      <View style={{backgroundColor:'#0C94B9', flex: 1}}>
        <Header navigator={this.props.navigator} value={this.props.header} />
        <View style={styles.container} >
          <Text style={styles.text}>
            {this.props.question}
          </Text>
          {this.generateOptions()}
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
    backgroundColor: '#0C94B9',

  },
  option: {
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

export default Question
