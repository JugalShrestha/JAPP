import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useRef, useState } from 'react'
import { COLORS } from '../constant';

const MapPage = () => {
const [confirm,setConfirm] = useState(false);
const [guide,setGuide] = useState([]);
const [destination,setDestination] = useState();
const [markers, setMarkers] = useState([]);
const mapRef = useRef(null);

const generateRandomGuides = (centerLocation) => {
  const numGuides = 5; // You can adjust the number of random guides
  const randomGuides = [];

  for (let i = 0; i < numGuides; i++) {
    const latOffset = Math.random() * 0.02 - 0.01; // Adjust the range of random offset
    const lonOffset = Math.random() * 0.02 - 0.01;

    const randomGuide = {
      latitude: centerLocation.latitude + latOffset,
      longitude: centerLocation.longitude + lonOffset,
    };

    randomGuides.push(randomGuide);
  }

  return randomGuides;
};

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
      const randomGuides = generateRandomGuides(newMarker);
      setGuide(randomGuides);
    }
  } catch (error) {
    console.error('Error searching location:', error);
  }
};

const handleConfirm = () =>{
  setTimeout(()=>{
    setConfirm(!confirm);
  },1000)
}

const guideIcon = require('../assets/guide.png');

  return (
    <View style={styles.container}>
      <View style={styles.destiny}>
      <View style={styles.loader}></View>
        <View style={{width:"80%",alignItems:'center',justifyContent:"center",gap:15,}}>
          <TextInput onChangeText={(text) => {setDestination(text);handleSearch(text);}} placeholder='Search Destination here!' style={{width:"100%",borderWidth:1,padding:10, borderRadius:5}}/>
          <TouchableOpacity onPress={handleConfirm} style={{padding:10,borderWidth:1, width: "100%", borderRadius:5, backgroundColor: COLORS.s1, alignItems:"center"}}><Text style={{color:COLORS.p1, fontWeight: "bold"}}>{confirm?"cancel":"confirm"}</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.map}>
        <MapView
        ref={mapRef}
          showsUserLocation={true}
          style={styles.map}
        >
          {markers.map((marker, id) => (
          <Marker key={id} coordinate={marker}/>
        ))}
        {confirm && guide.map((marker, id) => (
          <Marker key={id} coordinate={marker}>
            <Image source={guideIcon} style={{ width: 30, height: 30 }} />
          </Marker>
        ))}
        </MapView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', 
    },
    destiny:{
      width: "100%",
      position: "absolute",
      bottom: 0,
      height: 160,
      zIndex: 2,
      alignItems: "center",
      gap: 25,
      justifyContent: "center",
      backgroundColor: COLORS.p1,
      borderTopWidth: 1,
      borderColor: COLORS.p2,
    },
    map:{
      flex: 1,
      position: "absolute",
      top: 15,
      width:"100%",
      height: "100%",
    },
    loader:{
      width:"0%",
      backgroundColor: COLORS.s1,
      top: 0,
      padding: 0,
      position: "absolute",
    }
  });

export default MapPage