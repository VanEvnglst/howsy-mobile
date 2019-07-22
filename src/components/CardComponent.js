import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity, } from "react-native";
import Modal from 'react-native-modal';
import styles from "./CardComponentStyles";
import UserProfile from "./UserProfile";
import Engagement from "./EngagementComponent";
import ModalComponent from './Modal/ModalComponent';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  openModal() {
    this.setState({ isModalVisible: true });
  }

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => this.openModal()}>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode={"cover"}
                source={{ uri: this.props.data.url }}
              />
            </View>
            <View style={styles.engagementContainer}>
              <Engagement />
            </View>
          </View>
          <UserProfile
            thumbnail={this.props.data.thumbnailUrl}
            title={this.props.data.title}
          />
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackButtonPress={() => this.closeModal()}
          onBackdropPress={() => this.closeModal()}
        >
          <ModalComponent data={this.props.data} />
        </Modal>
      </Fragment>
    );
  }
}

export default Card;
