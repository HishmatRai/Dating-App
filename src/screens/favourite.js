import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Favourite = (props) => {
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
        {/* >>>>>>>>>>>>>>>>>>  Header <<<<<<<<<<<<<<<< */}
        <View style={styles._header_main}>
          <Text style={styles._heading}>Favourites</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="align-center" size={24} color="#ED3030" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="#ED3030" />
            </TouchableOpacity>
          </View>
        </View>

        {/* >>>>>>>>>>>>>>>>>>  Body <<<<<<<<<<<<<<<< */}
        <ScrollView showsVerticalScrollIndicator={false} >
          {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
          <View style={styles._card_main}>

            {/* card 1 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite1.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Jenifer Jane</Text>
              <View style={styles._active_main}>
                <Octicons name="primitive-dot" size={15} color="green" />
                <Text style={styles._active}>Active Now</Text>
              </View>
            </View>

            {/* card 2 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite2.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Christina</Text>
              <View style={styles._active_main}>
                <Octicons name="primitive-dot" size={15} color="green" />
                <Text style={styles._active}>Active Now</Text>
              </View>
            </View>
          </View>

          {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
          <View style={styles._card_main}>

            {/* card 2 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite3.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Haidar</Text>
              <View style={styles._active_main}>
                <Octicons name="primitive-dot" size={15} color="green" />
                <Text style={styles._active}>Active Now</Text>
              </View>
            </View>

            {/* card 2 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite4.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Maria</Text>
              <View style={styles._active_main}>
                <Text style={styles._last_seen}>Last seen :</Text>
                <Text style={styles._last_seen}>4h ago</Text>
              </View>
            </View>
          </View>

          {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
          <View style={styles._card_main}>

            {/* card 3 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite5.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Tashy</Text>
              <View style={styles._active_main}>
                <Octicons name="primitive-dot" size={15} color="green" />
                <Text style={styles._active}>Active Now</Text>
              </View>
            </View>

            {/* card 2 */}
            <View style={styles._Card_first}>
              <View style={styles._image_main}>
                <Image source={require('./../../assets/favourite6.png')} style={styles._user_image} />
              </View>
              <Text style={styles._user_name}>Angelena</Text>
              <View style={styles._active_main}>
                <Octicons name="primitive-dot" size={15} color="green" />
                <Text style={styles._active}>Active Now</Text>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 100 }}></View>
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
    marginTop: 30,
    alignItems: "center",
    marginBottom: 10
  },
  _heading: {
    fontWeight: "bold",
    fontSize: 35
  },
  _card_main: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _Card_first: {
    elevation: 2,
    width: "48%",
    borderRadius: 15,
    marginTop: 20

  },
  _active_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20
  },
  _image_main: {
    width: 154,
    height: 193,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  _user_image: {
    width: 154,
    height: 193,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  _user_name: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15
  },
  _active: {
    color: "#757E90",
    paddingLeft: 10
  },
  _last_seen:{
    color: "#757E90",
    paddingLeft: 3
  }

});

export default Favourite;
