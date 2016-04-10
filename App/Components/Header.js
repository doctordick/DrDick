import React, {
  Component,
  Text,
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
      <View>
        <TouchableHighlight onPress={this.goBack.bind(this)}>
          <View>
            <Text>
              &lsaquo;
            </Text>
          </View>
        </TouchableHighlight>
        <Text>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

export default Header
