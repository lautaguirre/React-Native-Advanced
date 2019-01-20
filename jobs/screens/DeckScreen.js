import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements'

import * as actions from '../actions';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="description" size={25} color={tintColor} />
    )
  };

  constructor(props) {
    super(props);

    this.renderCard = this.renderCard.bind(this);
    this.renderNoMoreCards = this.renderNoMoreCards.bind(this);
  }

  renderCard(job) {
    const initialRegion =  {
      latitude: job.company.lat ? job.company.lat : -32.9539569,
      longitude: job.company.lng ? job.company.lng : -60.6331856,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };

    return (
      <Card title={job.title} >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled
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
        <View style={styles.buttonsWrapper}>
          <Button
            title="Reject"
            backgroundColor="red"
            icon={{ name: 'times', type: 'font-awesome' }}
            onPress={() => this.props.rejectJob(job)}
          />
          <Button
            title="Like"
            backgroundColor="#009688"
            icon={{ name: 'heart', type: 'font-awesome' }}
            onPress={() => this.props.likeJob(job)}
          />
        </View>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs" >
        <Button
          title="Back to map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <ScrollView>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  },
  buttonsWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

const mapStateToProps = state => {
  return {
    jobs: state.jobs.result
  };
}

export default connect(mapStateToProps, actions)(DeckScreen);
