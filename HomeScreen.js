import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../NavOption"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import logo from '../image/logo.png';
import navigation from '@react-navigation/native';
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode: "contain",
          }}
        //source={logo}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, detail = null) => {
            // console.log(data);
            //console.log(detail);
            dispatch(setOrigin({
                  location: detail.geometry.location,
                  description: data.description,
                }
              )
              );
            dispatch(setDestination(null));

          }}

          fetchDetails={true}
          //returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />

      </View>
    </SafeAreaView>
  );
};
export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "blue",
    textAlign: "center",
  },
  safeAreaView: {
    flex: 1,

  },
});