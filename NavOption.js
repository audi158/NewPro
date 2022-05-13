import * as React from "react";
import { FlatList, Image, Text, View , TouchableOpacity, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectOrigin } from "./slices/navSlice";
import MapScreen from "./Sceen/MapScreen";
const data = [
    {
        id: "123",
        title: "Next to MapView",
        image: "Cat",
        screen: "MapScreen",

    },
];
const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}>
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" color="white" type="antdesign" />
                    </View>
                                
                </TouchableOpacity>

                
                
            )
            }
                />

           
    ) }
                /*  <Button
                    title="Next to MapView"
                    onPress={() => navigation.navigate('MapScreen')}
                    style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                ></Button>*/
               /* <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >

                    <View>
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>*/
                       
                                        

        /*  <Image
          style={{width: 120, height: 120,resizeMode:"contain" }}
              source={{uri: item.image }}
          />*/







    

export default NavOptions