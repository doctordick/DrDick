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
        <TouchableHighlight onPress={context.nextQuestion.bind(context)} key={index}>
          <View>
            <Text>
              {option}
            </Text>
          </View>
        </TouchableHighlight> 
      );
    });
  }

  render() {
    return (
      <View>
        <Header navigator={this.props.navigator} value={this.props.header} />
        <View style={styles.container}>
          <Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Question
