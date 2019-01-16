import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

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
      const { company, post_date, id, url } = job;

      return (
        <Card key={id}>
          <View style={{ height: 200 }}>
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
