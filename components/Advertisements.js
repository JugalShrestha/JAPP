import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native-elements';
import { COLORS } from '../constant';

const Advertisements = () => {
    

const DATA = [
    {
      id: 'a1',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a2',
      title: 'carasol-2.jpg',
    },
    {
      id: 'a3',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a4',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a5',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a6',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a7',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a8',
      title: 'carasol-1.jpg',
    },
    {
      id: 'a9',
      title: 'carasol-1.jpg',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={{ padding: 25, backgroundColor: 'red', marginHorizontal: 10 }}>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"flex-end"}}>
        <MapView showsUserLocation={true} showsMyLocationButton={true} style={{width:"100%",height:"100%"}}/>
        <View style={{width:"100%"}}>
            <Text style={{borderBottomWidth:2,borderTopWidth:2,fontSize:25,padding: 15,fontSize:20,fontWeight:"bold"}}>Best places to visit!</Text>
            <View style={{width: "100%",height:150, padding: 10}}>
                <FlatList
                data={DATA}
                horizontal
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} title={item.title}/>}
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
                renderItem={({item})=><Item style={{padding:25,backgroundColor:COLORS.n1}} title={item.title}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </View>
    </View>
  )
}

export default Advertisements