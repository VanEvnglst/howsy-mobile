import React, { PureComponent, Fragment } from 'react';
import { View, Image, Text } from 'react-native';
import Engagement from '../EngagementComponent';
import UserProfile from '../UserProfile';
import styles from '../CardComponentStyles';

class ModalComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <View style={styles.modalContainer}>
          <View style={styles.imageModal}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{ uri: this.props.data.url }}
            />
          </View>
          <View style={styles.engagementContainer}>
            <Engagement />
          </View>
          <UserProfile
            thumbnail={this.props.data.thumbnailUrl}
            title={this.props.data.title}
          />
        </View>
      </Fragment>
    );
  }
}

export default ModalComponent;
