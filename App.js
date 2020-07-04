import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "4fc1d344c9ccf74d5441ae3b6350f2ab";

export default class extends React.Component{
    state = {
        isLoading : true
    };

    getWeather = async (latitude,longitude) =>{
         const  { data:{
                         main : {temp},
                         weather,
                         name
                    }
                } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );
         this.setState({
             isLoading: false,
             condition: weather[0].main,
             temp,
             name

         });
         console.log(data.main.temp);
         console.log(condition);
    };

    getLocation = async() =>{
              try{
                  await Location.requestPermissionsAsync();
                  const {
                          coords : { latitude, longitude}
                  } = await Location.getCurrentPositionAsync();
                  this.getWeather( latitude,longitude );

              }catch(error){
                  Alert.alert("Can't find you.", "So sad");
              }
    };

    componentDidMount(){
        this.getLocation();
    };

    render(){
        const { isLoading, temp, condition,name } = this.state;
        return isLoading ? <Loading/> : <Weather temp ={ Math.round(temp) } condition ={condition} name = {name} />;
    };

}

