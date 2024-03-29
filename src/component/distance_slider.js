import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { Ionicons } from '@expo/vector-icons';


export default class DistanceSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 200,
    }
  }
  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });
  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={10}
          maximumValue={500}
          step={1}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
          maximumTrackTintColor="#707070"
          minimumTrackTintColor="#30439B"
          thumbTintColor="#707070"
          thumbImage={<Ionicons name="ios-menu" size={24} color="black" />}
          value={this.state.value}
          onValueChange={(value) => this.setState({ value })} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles._value}>{this.state.value} m</Text>
          <Text style={styles._value}>{this.state.value} mi</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  thumbStyle: {
    backgroundColor: '#30439B',
    height: 16,
    width: 40
  },
  trackStyle: {
    backgroundColor: "#707070"
  },
  _value: {
    color: "gray"
  }
});