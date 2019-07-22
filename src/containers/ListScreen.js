/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CardComponent from "../components/CardComponent";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.slice(0, 10)
        });
      });
  }

  renderCard = item => {
      return <CardComponent data={item} />;
  };

  render() {
    return (
      <View style={{ marginTop: 20, backgroundColor: "#a1b0b5" }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderCard(item)}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

export default ListScreen;
