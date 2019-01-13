import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements'

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  constructor(props) {
    super(props);

    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(job) {
    const initialRegion =  {
      latitude: job.company.lat ? job.company.lat : -32.9539569,
      longitude: job.company.lat ? job.company.lng : -60.6331856,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };

    return (
      <Card title={job.title} >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={initialRegion}
          >
          </MapView>
        </View>

        <View style={styles.detailWrapper} >
          <Text>{job.company.name}</Text>
          <Text>{job.post_date}</Text>
        </View>
        <Text>
          {job.description.substring(0, 140)}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs" ></Card>
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

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    jobs: state.jobs.result
  };
}

export default connect(mapStateToProps)(DeckScreen);
