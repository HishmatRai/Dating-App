import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Slider from 'react-native-slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarkerLeft from './customMarkerLeft';
import CustomMarkerRight from './customMarkerRight'
import { Ionicons } from '@expo/vector-icons';
import RangeSlider from 'rn-range-slider';

export default class DistanceSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 500,
    }
  }
  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });
  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={500}
          maximumValue={2000}
          step={1}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
          maximumTrackTintColor="#707070"
          minimumTrackTintColor="#30439B"
          thumbTintColor="#707070"
          thumbImage={<Ionicons name="ios-menu" size={24} color="black" />}
          value={this.state.value}
          onValueChange={(value) => this.setState({ value })} />
        <Text>{this.state.value}</Text>
        {/* <RangeSlider
          style={{ width: 160, height: 80 }}
          gravity={'center'}
          min={200}
          max={1000}
          step={20}
          selectionColor="#3df"
          blankColor="#f618"
          onValueChanged={(low, high, fromUser) => {
            this.setState({ rangeLow: low, rangeHigh: high })
          }}
           /> */}
        {/* <ScrollView scrollEnabled={this.state.scrollEnabled}> */}
        <MultiSlider
    isMarkersSeparated={true}

    customMarkerLeft={(e) => {
         return (<CustomMarkerLeft
          currentValue={e.currentValue}/>)
    }}

    customMarkerRight={(e) => {
         return (<CustomMarkerRight
         currentValue={e.currentValue}/>)
    }}
    />
    {/* </ScrollView> */}
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
  }
});