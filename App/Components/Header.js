import React, {
  Component,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight>
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
