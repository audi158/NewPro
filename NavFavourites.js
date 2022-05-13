import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  {
    id: "111",
    title: "Home",
    image: "Home",
    screen: "MapScreen",

  },
  {
    id: "222",
    title: "Next to MapView",
    image: "Cat",
    screen: "MapScreen",

  },
];
const NavFavourites = () => {
  return (
    <View>
      <Text>NavFavourites</Text>
    </View>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})