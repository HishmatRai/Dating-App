import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class CustomMarkerRight extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <Text>gjgfgjfghfgh</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"grey",
        width:40,
        height:30,
        borderRadius:30
    }
})