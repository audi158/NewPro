import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import Reac, {useState,useEffect} from 'react';
import {PlaceListdata} from './PlaceListdata';
import { CheckBox } from 'react-native-elements';


const CheckBoxPlace = () => {
  const Place1 = PlaceListdata[0];
  const Place2 = PlaceListdata[1];
  const Place3 = PlaceListdata[2];
  const Place4 = PlaceListdata[3];
  const Place5 = PlaceListdata[4];
  const [placeData1, setPlacedata1] = useState(false ,[Place1]);
  const [placeData2, setPlacedata2] = useState(false, [Place2]);
  const [placeData3, setPlacedata3] = useState(false, [Place3]);
  const [placeData4, setPlacedata4] = useState(false, [Place4]);
  const [placeData5, setPlacedata5] = useState(false, [Place5]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);
  const [randomNum, setRandomNum] = useState(2);
  const randomNumBer = (Math.floor(Math.random() * (3)+0))
 

  const placeData = []
  const click = () => {
   
    if (placeData1 === true) {
      
      placeData.push("\n rastaurant = " + Place1.places[randomNumBer].namePlace + "\n")
    }
    if (placeData2 === true) {
      placeData.push("\n ShoppingMall = " + Place2.places[randomNumBer].namePlace + "\n")
    }
    if (placeData3 === true) {
      placeData.push("\n Art Exhibition = " + Place3.places[randomNumBer].namePlace + "\n")
    }
    if (placeData4 === true) {
      placeData.push("\n Night Market = " + Place4.places[randomNumBer].namePlace + "\n")
    }
    if (placeData5 === true) {
      placeData.push("\n Hangout station = " + Place5.places[randomNumBer].namePlace + "\n")
    }
    Alert.alert(
      "Place list",
      "You Travel list   = " + placeData.toString()
    );
   
  }

      
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Select Place Type</Text>
      </View>
      <CheckBox title={Place1.nameType}
        checked={placeData1}
        onPress={() => setPlacedata1(!placeData1)} />

      <CheckBox title={Place2.nameType}
        checked={placeData2}
        onPress={() => setPlacedata2(!placeData2)} />

      <CheckBox title={Place3.nameType}
        checked={placeData3}
        onPress={() => setPlacedata3(!placeData3)} />

      <CheckBox title={Place4.nameType}
        checked={placeData4}
        onPress={() => setPlacedata4(!placeData4)} />

      <CheckBox title={Place5.nameType}
        checked={placeData5}
        onPress={() => setPlacedata5(!placeData5)} />

      <Button title='next' onPress={click}> </Button>
    </View>

  )

}

export default CheckBoxPlace  

const styles = StyleSheet.create({})