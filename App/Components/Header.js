import React, {
  Component,
  Text,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}

export default Header
