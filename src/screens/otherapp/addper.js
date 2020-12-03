import { Row } from "native-base";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar, Text, TextInput, TouchableOpacity, ScrollView, Picker } from "react-native";
import Photos from "../../component/photos";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Radiobutton from './radio'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Addpet = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [selectedValue, setSelectedValue] = useState("java");
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
            <StatusBar translucent hidden={true} />
            <ScrollView>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={styles._main}>
                    <View style={styles._photos_section}>
                        <View style={styles._image_view}>
                            <View style={styles._cat_image}>
                                <Image source={require('./../../../assets/cat.png')} style={styles._cat_image} />
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: -30 }}>
                                    <TouchableOpacity>
                                        <Entypo name="camera" size={24} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <FontAwesome5 name="video" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles._text_view}>
                            <Text style={styles._heading}>Breed</Text>
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Griffon belge"
                                    placeholderTextColor="white"
                                />
                            </View>

                            <Text style={styles._heading}>Location</Text>
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Attenhovenstraat 159,"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>
                    {/* >>>>>>>>>>>>>> <<<<<<<<<<<< */}
                    <View style={{ marginTop: 10, flexDirection: "row", alignSelf: "center", marginBottom: 10 }}>
                        <View style={styles._redio_heading}>
                            <Text style={styles._heading}>Sex</Text>
                        </View>
                        <View style={styles._radio_buttons}>
                            <Radiobutton />
                        </View>
                    </View>

                    {/* >>>>>>>>>>>>>> <<<<<<<<<<<< */}
                    <View style={styles._age_main}>
                        <View style={styles._age_view}>
                            <Text style={styles._heading}>Age</Text>
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._input2}
                                    placeholder="5 mo."
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                        <View style={styles._age_view}>
                            <Text style={styles._heading}>Weight</Text>
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._input2}
                                    placeholder="1Ibs"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles._age_main}>
                        <View style={styles._age_view}>
                            <Text style={styles._heading}>Size</Text>
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._input2}
                                    placeholder="6 cm."
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View>
                        <Text style={styles._text_line}>Is your cat spayed or neutered?</Text>
                        <View style={styles._dropdown_main}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 30, width: "100%", color: "black" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                            >
                                <Picker.Item label="Select One" value="java" />
                                <Picker.Item label="Gun Fight, Humanilism" value="js" />
                                <Picker.Item label="Hard Work,   Humanilism" value="js1" />
                                <Picker.Item label="Hard Work, Chairty " value="js2" />
                                <Picker.Item label="Hard Work , Gun Fight, Humanilism" value="js3" />
                                <Picker.Item label=" Chairty , Gun Fight, Humanilism" value="js5" />
                            </Picker>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View>
                        <Text style={styles._text_line}>Why do you need to rehome your cat?</Text>
                        <View style={styles._dropdown_main}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 30, width: "100%", color: "black" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                            >
                                <Picker.Item label="Select One" value="java" />
                                <Picker.Item label="Gun Fight, Humanilism" value="js" />
                                <Picker.Item label="Hard Work,   Humanilism" value="js1" />
                                <Picker.Item label="Hard Work, Chairty " value="js2" />
                                <Picker.Item label="Hard Work , Gun Fight, Humanilism" value="js3" />
                                <Picker.Item label=" Chairty , Gun Fight, Humanilism" value="js5" />
                            </Picker>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View>
                        <Text style={styles._text_line}>How long are you able to keep your cat while we help you find a suitable new home?</Text>
                        <View style={styles._dropdown_main}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 30, width: "100%", color: "black" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                            >
                                <Picker.Item label="Select One" value="java" />
                                <Picker.Item label="Gun Fight, Humanilism" value="js" />
                                <Picker.Item label="Hard Work,   Humanilism" value="js1" />
                                <Picker.Item label="Hard Work, Chairty " value="js2" />
                                <Picker.Item label="Hard Work , Gun Fight, Humanilism" value="js3" />
                                <Picker.Item label=" Chairty , Gun Fight, Humanilism" value="js5" />
                            </Picker>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View>
                        <Text style={styles._text_line}>Microchipped</Text>
                        <View style={styles._dropdown_main}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 30, width: "100%", color: "black" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                            >
                                <Picker.Item label="Select One" value="java" />
                                <Picker.Item label="Gun Fight, Humanilism" value="js" />
                                <Picker.Item label="Hard Work,   Humanilism" value="js1" />
                                <Picker.Item label="Hard Work, Chairty " value="js2" />
                                <Picker.Item label="Hard Work , Gun Fight, Humanilism" value="js3" />
                                <Picker.Item label=" Chairty , Gun Fight, Humanilism" value="js5" />
                            </Picker>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                        <Text style={styles._heading2}>Records</Text>
                        <TouchableOpacity>
                            <Text style={styles._upload_btn}>Upload Documents</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>> */}
                    <View>
                        <Text style={styles._text_line}>Special issue or behaviour</Text>
                        <TextInput
                            style={styles._text_area}
                            placeholder="6 cm."
                            placeholderTextColor="white"
                            multiline={true}
                            numberOfLines={6}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9A1A1"
    },
    _main: {
        margin: 20
    },
    _photos_section: {
        flexDirection: "row"
    },
    _image_view: {
        width: "50%",

    },
    _text_view: {
        width: "50%",
    },
    _cat_image: {
        width: 145,
        height: 158
    },
    _heading: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },
    _heading2: {
        fontWeight: "bold",
        fontSize: 20,
    },
    _input: {
        fontWeight: "bold",
        marginBottom: 5,
        letterSpacing: 1,
        color: "white"
    },
    _input2: {
        fontWeight: "bold",
        marginBottom: 5,
        letterSpacing: 1,
        color: "white",
        fontSize: 17
    },
    _input_main: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    _redio_heading: {
        width: "20%"
    },
    _radio_buttons: {
        width: "80%",
        marginTop: 8
    },
    _age_main: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    _age_view: {
        width: "45%"
    },
    _text_line: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    _dropdown_main: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 8,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20
    },
    _upload_btn: {
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        letterSpacing: 1,
        fontWeight: "bold"
    },
    _text_area: {
        backgroundColor: "#D5D5D5",
        elevation: 8,
        padding: 5,
        borderRadius: 10
    }
});

export default Addpet;
