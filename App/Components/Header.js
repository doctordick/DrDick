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
        <TouchableHighlight underlayColor={"#ffffff"} onPress={this.goBack.bind(this)}>
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
    marginBottom: 15,
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 44,
  },
  backButton: {
    flex: 1, 
    alignItems: 'flex-start'
  },
  text: {
    color: '#007aff',
    fontSize: 48
  },
  title: {
    fontSize: 24  
  },
  titleContainer: {
    marginTop: 16,
    marginBottom: 15,
    flex: 1,
    alignItems: 'center',

  }
})

export default Header
