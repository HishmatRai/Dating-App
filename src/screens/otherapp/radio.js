import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyComponent = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles._main}>
            <View style={styles._select_gender}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    uncheckedColor="white"
                    color="red"
                />
                <Text style={styles._select_text}>Male</Text>
            </View>
            <View style={styles._select_gender2}>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    uncheckedColor="white"
                    color="red"

                />
                <Text style={styles._select_text}>Female</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    _main: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    _select_gender: {
        flexDirection: "row",
        alignItems: "center",

    },
    _select_gender2: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 50,
    },
    _select_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})

export default MyComponent;