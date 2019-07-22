import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './CardComponentStyles';

class UserProfile extends PureComponent {
  render() {
    return (
      <View style={styles.userProfile}>
        <Image
          source={{ uri: this.props.thumbnail }}
          resizeMode={"cover"}
          style={styles.profile}
        />
        <Text allowFontScaling={false} style={styles.profileName}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default UserProfile;
