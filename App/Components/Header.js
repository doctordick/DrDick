import React, {
  Component,
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

class Header extends Component {
  goBack() {
    if(this.props.navigator){
      this.props.navigator.pop();
    }
  }
  render() {
    return (
      <View style={style.container}>
        <TouchableHighlight underlayColor={"'rgba(255, 255, 255, 0.05)'"} onPress={this.goBack.bind(this)}>
          <View style={style.backButton}>
            <Text style={style.text}>
              &lsaquo;
            </Text>
          </View>
        </TouchableHighlight>
        <View style={style.titleContainer}>
          <Text style={style.title}>
            {this.props.value}
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#0785ab',
    flex: 1
  },
  backButton: {
    // flex: 1, 
    alignItems: 'flex-start',
    marginLeft: 5
  },
  text: {
    color: '#fff',
    fontSize: 48
  },
  title: {
    fontSize: 24,
    color: '#fff'  
  },
  titleContainer: {
    marginTop: 16,
    marginBottom: 15,
    flex: 1,
    alignItems: 'center',

  }
})

export default Header
