import React, { PureComponent, Fragment } from "react";
import { View, Image, Text } from "react-native";
import styles from "./CardComponentStyles";
import Images from '../assets/constants/Images';

class EngagementComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <View style={styles.engagement}>
          <Image
            style={styles.icons}
            resizeMode={"contain"}
            source={Images.views}
          />
          <Text allowFontScaling={false} style={styles.engagementText}>
            7,720
          </Text>
        </View>
        <View style={styles.engagement}>
          <Image
            style={styles.icons}
            resizeMode={"contain"}
            source={Images.comments}
          />
          <Text allowFontScaling={false} style={styles.engagementText}>
            34
          </Text>
        </View>
        <View style={styles.engagement}>
          <Image
            style={styles.icons}
            resizeMode={"contain"}
            source={Images.favorite}
          />
          <Text allowFontScaling={false} style={styles.engagementText}>
            356
          </Text>
        </View>
      </Fragment>
    );
  }
}

export default EngagementComponent;
