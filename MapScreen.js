import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import Map from "./Map";
import NavigationCard from "../NavigateCard";
import RideOptionCard from "../RideOptionCard";
import { createStackNavigator } from "@react-navigation/stack";
import CheckBoxPlace from "../CheckBoxPlace";
import TravelList from '../TravelList'
const MapScreen =() =>{
  const Stack =createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
      <Map/>
    </View>
      <View style={tw`h-1/2`}>
    <Stack.Navigator>
      <Stack.Screen
        name="NavigateCard"
            component={NavigationCard}
            options={{headerShown: false,
            }}
          />
            <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
      />
          <Stack.Screen
            name="CheckBoxPlace"
            component={CheckBoxPlace}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TravelList"
            component={TravelList}
            options={{
              headerShown: false,
            }}
          />
    </Stack.Navigator>
      </View>
      <View>
            

      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent:"flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});
export default MapScreen;