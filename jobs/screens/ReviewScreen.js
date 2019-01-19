import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'ReviewJobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
        backgroundColor="rgba(0, 0, 0, 0)"
        color="rgba(0, 122, 255, 1)"
      />
    )
  })

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, post_date, id, url, title } = job;
      const initialRegion = {
        latitude: company.lat ? company.lat : -32.9539569,
        longitude: company.lng ? company.lng : -60.6331856,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02,
      };

      return (
        <Card key={id} title={title} >
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company.name}</Text>
              <Text style={styles.italics}>{post_date}</Text>
            </View>
            <Button
              title="Apply now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.renderLikedJobs()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
});

const mapStatetoProps = (state) => {
  return { likedJobs: state.likedJobs };
};

export default connect(mapStatetoProps)(ReviewScreen);
