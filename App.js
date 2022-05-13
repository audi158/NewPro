import "react-native-gesture-handler";
import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './Sceen/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Sceen/MapScreen';
import TravelList from "./TravelList";

//const Stack = createStackNavigator();
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior={Platform.OS === "android" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android"?-64 :0}
          style={{flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeSceen"
              component={HomeScreen}
              options={{ headerShown: false, }} />
              
                <Stack.Screen
                  name="TravelList"
                  component={TravelList}
                   />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false, }} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
/* <SafeAreaView>
                <HomeScreen/>
            </SafeAreaView> */


