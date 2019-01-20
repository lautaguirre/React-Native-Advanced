import React, { Component } from 'react';
import { View } from 'react-native';

class Swipe extends Component {
  renderCards() {
    if (this.props.data.length === 0) {
      return (
        <View>
          {this.props.renderNoMoreCards()}
        </View>
      );
    }

    return this.props.data.map((item) => {
      return (
        <View key={item.id}>
          {this.props.renderCard(item)}
        </View>
      );
    });
  }

  render() {
    return(
      <View style={{ marginTop: 25 }} >
        {this.renderCards()}
      </View>
    );
  }
}

export default Swipe;