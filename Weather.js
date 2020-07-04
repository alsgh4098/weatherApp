import React from "react";
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA080","#D39D38"]
    },

    Clear:{
        iconName: "weather-sunny",
        gradient: ["#fdc830","#F37335"]
    },
    Tornado:{
        iconName: "weather-tornado",
        gradient: ["#3a6073","#16222a"]
    },
    
    Squall:{
        iconName: "weather-pouring",
        gradient: ["#4b6cb7","#182848"]
    },    
    Ash:{
        iconName: "weather-cloudy",
        gradient: ["#44A08D","#093637"]
    },   
    Dust:{
        iconName: "weather-cloudy",
        gradient: ["#44A08D","#093637"]
    },    
    Smoke:{
        iconName: "weather-windy-variant",
        gradient: ["#44A08D","#093637"]
    },    
    Mist:{
        iconName: "weather-windy-variant",
        gradient: ["#44A08D","#093637"]
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#91eae4","#86a8e7"]
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ["#004e92","#000428"]
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#c2e59c","#64b3f4"]
    },
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#6a9113","#141517"]
    }
}




export default function Weather({temp, condition, name}){
    return (
            
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={ styles.container }
            >   
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        size={96} 
                        color="white" 
                        name={weatherOptions[condition].iconName}
                    />
                    <Text style={styles.temp}>
                        {temp}
                    </Text>  
                </View>
                <View style={styles.halfContainer}>
                    <Text style={styles.cityTypo}>
                        {name}
                    </Text>
                 </View>
            </LinearGradient>
    );
}

Weather.propTypes = {

    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
                    "Thunderstorm",
                    "Drizzle",
                    "Rain",
                    "Snow",
                    "Atmosphere",
                    "Clear",
                    "Clouds",
                    "Haze",
                    "Mist",
                    "Dust"
                ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color: "white"
    },
    cityTypo:{
        fontSize:50,
        height:600,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});