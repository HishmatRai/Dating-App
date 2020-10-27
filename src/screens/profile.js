import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Profile = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [galleryPic, setGalleryPic] = useState(null);
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    
    openGallert = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setGalleryPic(result.uri);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <View style={{ margin: 20 }}>
                {/* >>>>>>>>>>>>>>>>>>  Header <<<<<<<<<<<<<<<< */}
                <View style={styles._header_main}>
                    <TouchableOpacity>
                        <Ionicons name="ios-arrow-back" size={24} color="#CA2C30" />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Profile</Text>
                </View>

                {/* >>>>>>>>>>>>>>>>>>  Nody <<<<<<<<<<<<<<<< */}
                <ScrollView showsVerticalScrollIndicator={false} >

                    {/* >>>>>>>>>>>>>>>>>>  user profile <<<<<<<<<<<<<<<< */}
                    <View style={{ alignSelf: "center" }}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/profile.png')} style={styles._user_profile} />
                        </View>
                        <Text style={styles._user_name}>Johan Smith</Text>
                        <Text style={styles.user_dis}>Perusing ABA. Love is life and We live only once. So your Life.</Text>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>  Setting media and edit <<<<<<<<<<<<<<<< */}
                    <View style={styles._sub_header_main}>
                        <TouchableOpacity style={styles._setting_main}>
                            <Ionicons name="md-settings" size={34} color="#30439B" />
                            <Text style={styles._icons_heading}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._setting_main}
                            onPress={() => openGallert()}
                        >
                            <FontAwesome name="camera" size={34} color="#CA2C30" />
                            <Text style={styles._icons_heading}>Add Media</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._setting_main}>
                            <FontAwesome name="edit" size={34} color="#30439B" />
                            <Text style={styles._icons_heading}>Edit Enfo</Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10
    },
    _heading: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20
    },
    _profile_main: {
        width: 148,
        height: 148,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    },
    _user_profile: {
        width: 148,
        height: 148,
        borderRadius: 100,
    },
    _user_name: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30
    },
    user_dis: {
        color: "gray",
        fontSize: 16,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center",
        marginTop: 10
    },
    _sub_header_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    _setting_main: {
        alignItems: "center"
    },
    _icons_heading: {
        fontWeight: "bold",
        color: "gray",
        marginTop: 5
    }
});

export default Profile;
