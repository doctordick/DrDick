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
import Question from './Question';

const questionCollection = [{
    header: 'Recent HIV & STD Tests',
    questions: [
        "Last HIV test? ",
        "Last syphilis test?",
        "Last urine test for GC and CT?",
        "Last throat swab for GC and CT?",
        "Last butt swab for GC and CT?",
        "Last herpes type 2 test?",
        "Last hepatitis C test?"
    ]
}, {
    header: "Recent Sexual History",
    questions: [
        "Last time bottoming?",
        "Last time topping?",
        "Last time giving a blow job?",
        "Last time getting a blow job?",
        "Last time injecting recreational drugs?"
    ]
}]

class Questionnaire extends Component {
    constructor(props){
        super(props);
        this.state = {
            header: questionCollection[0].header,
            question: questionCollection[0].questions[0],
            questionIndex: 0,
            collectionIndex: 0
        };
    }
    switchQuestion() {
        // increment number until the end of first array
        // then switch to the second array
        this.state.questionIndex++;

        let questionIndex = this.state.questionIndex; 
        let collectionIndex = this.state.collectionIndex;

        if(collectionIndex === 0 && questionIndex >= 7) {
            collectionIndex = 1;
            questionIndex = 0;
        } 

        // const nextRoute = this.props.nextRoute;

        if(collectionIndex === 1 && questionIndex >= 5){
            // This route change isn't working
            this.props.nextRoute({
                id: "Loading"
            });
        }
        this.setState({ 
                        question: questionCollection[collectionIndex].questions[questionIndex],
                        header: questionCollection[collectionIndex].header,
                        questionIndex: questionIndex,
                        collectionIndex: collectionIndex
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
          <Question header={this.state.header} 
                    question={this.state.question} 
                    nextQuestion={this.switchQuestion.bind(this)}
                    navigator={this.props.navigator}
                    />
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

export default Questionnaire
