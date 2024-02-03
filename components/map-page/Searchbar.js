import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../../constant';

const Searchbar = ({setDestination,destination,setMarkers,setSearching,mapRef}) => {
    const handleSearch = async (text) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
          );
          const data = await response.json();
      
          if (data && data.length > 0) {
            const firstResult = data[0];
            const newMarker = {
              latitude: parseFloat(firstResult.lat),
              longitude: parseFloat(firstResult.lon),
            };
      
            setMarkers([newMarker]);
            mapRef.current.animateToRegion({
              latitude: newMarker.latitude,
              longitude: newMarker.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            });
            setSearching(true);
          }
        } catch (error) {
          console.error('Error searching location:', error);
        }
      };
  return (
    <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <TextInput onChangeText={(text) => {setDestination(text)}} placeholder='Search Destination here!' style={{width:"70%",borderWidth:1,padding:5,paddingLeft:15, borderRadius:15}}/>
        <TouchableOpacity onPress={()=>handleSearch(destination)} style={{width:"25%",borderRadius:15,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:COLORS.n1}}><Text style={{fontWeight:"bold",color:COLORS.p1}}>Search</Text></TouchableOpacity>
    </View>
    )
};

export default Searchbar;