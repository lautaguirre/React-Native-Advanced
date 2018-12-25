import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Swipe
          data={this.props.jobs}
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
