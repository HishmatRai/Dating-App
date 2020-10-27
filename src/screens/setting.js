import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import ToggleButton from './../component/togglebutton'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Setting = (props) => {
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
                {/* <<<<<<<<<<<<<   Header >>>>>>>>>>>>> */}
                <View style={styles._header}>
                    <TouchableOpacity>
                        <Ionicons name="ios-arrow-back" size={20} color="#CA2C30" />
                    </TouchableOpacity>
                    <Text style={styles._header_text}>Settings</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <<<<<<<<<<<<<   Card 1 >>>>>>>>>>>>> */}
                    <TouchableOpacity style={styles._card1}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                            <Text style={styles._premium}>Premium</Text>
                        </View>
                        <Text style={styles._premium_des}>Unlock  our most exclusicve features</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<<<   Card 2 >>>>>>>>>>>>> */}
                    <TouchableOpacity style={styles._card1}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                            <AntDesign name="plus" size={24} color="#30439B" />
                        </View>
                        <Text style={styles._premium_des}>Unlimited likes & more</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<<<   Card 3 >>>>>>>>>>>>> */}
                    <TouchableOpacity style={styles._card1}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                            <Text style={styles._standard}>STANDARD</Text>
                        </View>
                        <Text style={styles._premium_des}>Watch add to earn 20 credits</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<< Account Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 50 }}>
                        <Text style={styles._heading}>Account Settings</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Phone number</Text>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Text style={styles._mob_number}>123456789</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Discovery Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles._heading}>Discovery Settings</Text>
                        <View style={styles._mob_number_setting_main2}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles._mob_number_heading}>Location</Text>
                                <TouchableOpacity>
                                    <Text style={styles._current_location}>My Current Location</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles._global}>Global</Text>
                                <View style={styles._toggle_button}>
                                    <ToggleButton />
                                </View>
                            </View>
                        </View>
                    </View>

                    <Text style={styles._global_dis}>Global change will allow you to see perople nearby and from aroud the world</Text>

                    {/* <<<<<<<<<<<< Date Right >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Show me on Date Right</Text>
                            <ToggleButton />
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Share my feed >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Share my feed</Text>
                            <View style={{ marginRight: 5 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Recommended sort >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Recommended sort</Text>
                            <View style={{ marginRight: 3 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Web Profile Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Web Profile</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Username</Text>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles._username}>Claim yours</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Top Picks >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Top Picks</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Manage Top Picks</Text>
                            <View style={{ marginRight: 3 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Read Receipts >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Read Receipts</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Send Read Receipts</Text>
                            <View style={{ marginRight: 3 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Swipe Surge >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Swipe Surge</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Show me in Swipe Surge</Text>
                            <View style={{ marginRight: 3 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Activity Status >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Activity Status</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Show me Activity Status</Text>
                            <View style={{ marginRight: 3 }}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Nitification >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Nitification</Text>
                        <View style={styles._notification_main}>
                            <View style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Email</Text>
                                <View style={{ marginRight: 3 }}>
                                    <ToggleButton />
                                </View>
                            </View>
                            <View style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Push Notification</Text>
                                <View style={{ marginRight: 3 }}>
                                    <ToggleButton />
                                </View>
                            </View>

                            <View style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Receive news letters</Text>
                                <View style={{ marginRight: 3 }}>
                                    <ToggleButton />
                                </View>
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Payment Account >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Payment Account</Text>
                        <View style={styles._notification_main}>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Manage Payment Account</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Restore Purchase</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Contact Us >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Contact Us</Text>
                        <TouchableOpacity style={styles._support}>
                            <Text style={styles._heading}>Help & Support</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <<<<<<<<<<<< Community >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Community</Text>
                        <View style={styles._notification_main}>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Community Guidelines</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Safety tips</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<<  Share Date Right >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Share Date Right</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Legal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Licenses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Terms of Serviecs</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <<<<<<<< Login Button >>>>>>>>> */}
                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles._button_txt}>Logout</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<< Delete Account Button >>>>>>>>> */}
                    <TouchableOpacity
                        style={styles._delete_account_button}>
                        <Text style={styles._delete_account_button_txt}>Delete Account</Text>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 70 }}></View>
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
    _header: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10

    },
    _header_text: {
        fontFamily: "MontserratSemiBold",
        color: "#CA2C30",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 20,
    },
    _logo: {
        width: 172,
        height: 32

    },
    _card1: {
        elevation: 2,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 100,
        alignItems: "center",
        marginTop: 30,
    },
    _premium: {
        color: "#EFBF00",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 20

    },
    _standard: {
        color: "#30439B",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 10,
        marginTop: 10,
        paddingLeft: 5

    },
    _premium_des: {
        // fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "gray",

    },
    _heading: {
        color: "black",
        fontFamily: "MontserratSemiBold",
        fontSize: 20,
        paddingLeft: 10,
        marginBottom: 10
    },
    _mob_number_setting_main: {
        elevation: 8,
        padding: 2,
        margin: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    _mob_number_setting_main3: {
        padding: 2,
        margin: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    _notification_main: {
        elevation: 8,
        margin: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 2
    },
    _mob_number_setting_main2: {
        elevation: 8,
        padding: 2,
        margin: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 10
    },
    _mob_number_heading: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15

    },
    _mob_number: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15
    },
    _username: {
        color: "gray",
        fontSize: 15
    },
    _current_location: {
        color: "#30439B",
        fontFamily: "MontserratSemiBold",
        fontSize: 15
    },
    _global: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15,
        paddingTop: 20
    },
    _toggle_button: {
        marginTop: -20,
        marginRight: -150
    },
    _global_dis: {
        color: "gray",
        fontSize: 15,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 20
    },
    _support: {
        elevation: 8,
        backgroundColor: "white",
        padding: 3,
        alignItems: "center"
    },
    button: {
        backgroundColor: "#CA2C30",
        borderRadius: 50,
        width: "90%",
        alignSelf: "center",
        marginTop: 50
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: "MontserratSemiBold"
    },

    _delete_account_button: {
        borderRadius: 50,
        width: "50%",
        alignSelf: "center",
        marginTop: 30
    },
    _delete_account_button_txt: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 1,
        textAlign: "center",
        color: "#30439B",
        borderBottomColor: "#30439B",
        borderBottomWidth: 1,
        fontSize: 22,
        fontFamily: "MontserratSemiBold"
    },
});

export default Setting;