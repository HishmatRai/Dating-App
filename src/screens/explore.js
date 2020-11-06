import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from './../component/imageslider'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Explore = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <View style={{ margin: 20 }}>
        {/* >>>>>>>>>>>>>>>>>>>>> Header <<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <View style={styles._header_main}>
          <TouchableOpacity
          >
            <MaterialCommunityIcons name="filter-variant" size={24} color="#ED3030" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notification")}>
            <Ionicons name="ios-notifications" size={24} color="#ED3030" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* images */}
          <View style={styles._image_main_view}>
            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>
          </View>

          {/* large image */}
          <Slider  path={props}/>

        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },


  _header_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10
  },
  _image_main_view: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _image_main: {
    width: 54,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: "red"
  },
  _profile_images: {
    width: 54,
    height: 60,
    borderRadius: 10
  },
  _large_image_main: {
    width: 299,
    height: 361,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15
  },
  _large_image: {
    width: 299,
    height: 361,
    borderRadius: 15

  }
});

export default Explore;
