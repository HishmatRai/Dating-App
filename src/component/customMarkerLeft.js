import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CustomMarkerLeft extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Ionicons name="ios-menu" size={10} color="white" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#30439B",
        width:40,
        height:15,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    }
})