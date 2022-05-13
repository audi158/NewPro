import { StyleSheet, Text, View ,ScrollView , VirtualizedList} from 'react-native';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectOrigin } from './slices/navSlice';
import Timeline from 'react-native-timeline-flatlist';
import CheckBoxPlace from './CheckBoxPlace'
const TravelList = () => {
    const PlaceList = CheckBoxPlace;
    const origin = useSelector(selectOrigin);
   
    const dataOrigin=[
        { TimeStart: '', title: 'Point Start', description: origin.description },
        { TimeStart: '', title: 'Travel', description: PlaceList }
    ];
  
    return (
   
   
        <ScrollView>
            <View style={styles.container}>
                <Timeline
                    data={dataOrigin}
                    circleSize={20}
                    separator={true}
                    circleColor='blue'
                    lineColor='gray'
                    timeStyle={styles.time}
                    descriptionStyle={styles.description}
                />
            </View>
        </ScrollView>
   
   
    )
}

export default TravelList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    time:{
        textAlign: 'center',
        backgroundColor:'gray',
        fontSize:12,
        color:'white',
        padding:5,
        borderRadius:13,
        overflow:'hidden'
    },
    description:{
        fontSize: 12,
        color: 'gray'
    }
})