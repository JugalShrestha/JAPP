import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native-elements';
import { COLORS } from '../constant';

const Advertisements = () => {
    
const DATA = [
    {
      id: 'a1',
      image: require("../assets/carasol-1.jpg"),
      location: "sagarmatha",
      
    },
    {
      id: 'a2',
      image: require("../assets/pic1.jpg"),
      location: "himalayan Java coffee",
    },
    {
      id: 'a3',
      image: require("../assets/pic2.jpg"),
      location: "mountain",
    },
    {
      id: 'a4',
      image: require("../assets/carasol-1.jpg"),
    },
    {
      id: 'a5',
      image: require("../assets/carasol-1.jpg"),
    },
    {
      id: 'a6',
      image: require("../assets/carasol-1.jpg"),
    },
    {
      id: 'a7',
      image: require("../assets/carasol-1.jpg"),
    },
    {
      id: 'a8',
      image: require("../assets/carasol-1.jpg"),
    },
    {
      id: 'a9',
      image: require("../assets/carasol-1.jpg"),
    },
  ];
  
  const Item = ({ image }) => {
    return (
    <View style={{ width: 200, height:100,backgroundColor: COLORS.n1, marginHorizontal: 10 }}>
      <Image source={image} style={{width: "100%",height:"100%"}}/>
    </View>
  )};
  return (
    <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"flex-end"}}>
        <MapView showsUserLocation={true} showsMyLocationButton={true} style={{width:"100%",height:"100%"}}/>
        <View style={{width:"100%"}}>
            <Text style={{borderBottomWidth:2,borderTopWidth:2,fontSize:25,padding: 15,fontSize:20,fontWeight:"bold"}}>Best places to visit!</Text>
            <View style={{width: "100%",height:150, padding: 10}}>
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} image={item.image}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>
        <View style={{width:"100%"}}>
            <Text style={{borderBottomWidth:2,borderTopWidth:2,fontSize:25,padding: 15,fontSize:20,fontWeight:"bold"}}>Places called heaven!</Text>
            <View style={{width: "100%",height:150,padding: 10}}> 
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} image={item.image}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>
    </View>
  )
}

export default Advertisements