import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements'

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  constructor(props) {
    super(props);

    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(job) {
    return (
      <Card />
    );
  }

  render() {
    return (
      <ScrollView>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs.result
  };
}

export default connect(mapStateToProps)(DeckScreen);
