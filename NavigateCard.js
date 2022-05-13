import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,Button} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { selectTravelTimeInformation, setDestination } from "./slices/navSlice";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_MAPS_APIKEY } from '@env';
import RideOptionCard from "./RideOptionCard";
import CheckBoxPlace from './CheckBoxPlace';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const NavigationCard = ({}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Select Place plane travel</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                        <GooglePlacesAutocomplete
                            placeholder="Where to"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                            console.log(data);
                            console.log(details);
                            dispatch(setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            );

                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                        />
                </View>
                <View>
                <Button 
                title="Slect place plane" onPress={() => navigation.navigate('CheckBoxPlace')}>
                </Button>
                </View>
                <View>
                <Button 
                title="List Travel" onPress={() => navigation.navigate('TravelList')}>
                </Button>
                </View>
            </View>
                           

            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RideOptionCard')}

                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}

                >
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center`}>Time,km</Text> 

                    
                </TouchableOpacity>
              
            </View>
        </SafeAreaView>
    );
};
export default NavigationCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {

        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
  

});