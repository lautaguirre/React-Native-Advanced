import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  constructor(props) {
    super(props);

    this.renderSlides = this.renderSlides.bind(this);
    this.renderLastSlide = this.renderLastSlide.bind(this);
  }

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          containerViewStyle={{ marginTop: 15 }}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides(data) {
    const { item, index } = data;

    return (
      <View
        style={[styles.slideStyle, { backgroundColor: item.color }]}
      >
        <Text style={styles.textStyle} >{item.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    );
  }

  render() {
    return (
      <FlatList
        pagingEnabled
        horizontal
        style={{ flex: 1 }}
        data={this.props.data}
        keyExtractor={(item) => item.text}
        renderItem={this.renderSlides}
      />
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  }
});

export default Slides;