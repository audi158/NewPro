import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from './slices/navSlice';
const RideOptionCard = () => {
  const navigation = useNavigation();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('NavigationCard')}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
          >
            <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Calculate Distance</Text>

      </View>
      <View style={tw`-ml-6`}>
        <Text style={tw`text-center py-5 text-xl`}>Kilo meter - {travelTimeInformation?.distance.text} </Text>
        <Text style={tw`text-center py-5 text-xl`}>travel time -{travelTimeInformation?.duration.text} </Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})